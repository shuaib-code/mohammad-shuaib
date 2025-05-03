import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/db';
import Blog from '@/models/Blog';

export async function GET(req: NextRequest) {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, blogs });
}

export async function POST(req: NextRequest) {
    await connectDB();
    const body = await req.json();

    const { title, content, image, author } = body;
    if (!title || !content || !image || !author) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }
    const newBlog = new Blog({ title, content, image, author });
    await newBlog.save();
    return NextResponse.json({ success: true, message: 'Blog added successfully!', blog: newBlog }, { status: 201 });
}

export async function DELETE(req: NextRequest) {
    await connectDB();
    const { id } = await req.json();
    await Blog.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'Blog deleted' });
}

export async function PUT(req: NextRequest) {
    await connectDB();
    const formData = await req.formData();
    const id = formData.get('id');

    const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        {
            title: formData.get('title'),
            content: formData.get('content'),
            image: formData.get('image'),
            author: formData.get('author')
        },
        { new: true }
    );

    return NextResponse.json({ success: true, message: 'Blog updated successfully!', blog: updatedBlog });
}
