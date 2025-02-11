import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/db';
import Contact from '@/models/Contact';

export async function GET(req: NextRequest) {
    try {
        await connectDB();
        const message = await Contact.find().sort({ createdAt: -1 });
        return NextResponse.json({ success: true, message });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
