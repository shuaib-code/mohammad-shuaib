import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/db';
import Blog from '@/models/Blog';

import { Types } from 'mongoose';

export async function GET(req: NextRequest) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id || !Types.ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, message: 'Invalid blog ID' }, { status: 400 });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
        return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
}
