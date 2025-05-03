import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/db';
import Project from '@/models/Project';

import { Types } from 'mongoose';

export async function GET(req: NextRequest) {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id || !Types.ObjectId.isValid(id)) {
        return NextResponse.json({ success: false, message: 'Invalid project ID' }, { status: 400 });
    }

    const project = await Project.findById(id);
    if (!project) {
        return NextResponse.json({ success: false, message: 'Project not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, project });
}
