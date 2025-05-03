import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/lib/db';
import Project from '@/models/Project';

export async function GET(req: NextRequest) {
    await connectDB();
    const projects = await Project.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, projects });
}

export async function POST(req: NextRequest) {
    await connectDB();
    const body = await req.json();

    const {
        title,
        slug,
        description,
        content,
        technologies,
        liveUrl,
        repoUrl,
        images,
        tags,
        startDate,
        endDate,
        status,
        featured,
        order,
        contributors,
        videoUrl,
        category,
        challenges,
        results,
        testimonials,
        seoMetaTitle,
        seoMetaDescription
    } = body;

    if (!title || !slug || !description) {
        return NextResponse.json({ error: 'Title, slug, and description are required' }, { status: 400 });
    }

    const newProject = new Project({
        title,
        slug,
        description,
        content,
        technologies,
        liveUrl,
        repoUrl,
        images,
        tags,
        startDate,
        endDate,
        status,
        featured,
        order,
        contributors,
        videoUrl,
        category,
        challenges,
        results,
        testimonials,
        seoMetaTitle,
        seoMetaDescription
    });

    await newProject.save();

    return NextResponse.json(
        { success: true, message: 'Project added successfully!', project: newProject },
        { status: 201 }
    );
}

export async function DELETE(req: NextRequest) {
    await connectDB();
    const { id } = await req.json();

    await Project.findByIdAndDelete(id);

    return NextResponse.json({ success: true, message: 'Project deleted' });
}

export async function PUT(req: NextRequest) {
    await connectDB();
    const formData = await req.formData();
    const id = formData.get('id');

    const updatedProject = await Project.findByIdAndUpdate(
        id,
        {
            title: formData.get('title'),
            slug: formData.get('slug'),
            description: formData.get('description'),
            content: formData.get('content'),
            technologies: formData.getAll('technologies'),
            liveUrl: formData.get('liveUrl'),
            repoUrl: formData.get('repoUrl'),
            images: formData.getAll('images'),
            tags: formData.getAll('tags'),
            startDate: formData.get('startDate'),
            endDate: formData.get('endDate'),
            status: formData.get('status'),
            featured: formData.get('featured') === 'true',
            order: formData.get('order'),
            contributors: formData.getAll('contributors'),
            videoUrl: formData.get('videoUrl'),
            category: formData.get('category'),
            challenges: formData.get('challenges'),
            results: formData.get('results'),
            testimonials: formData.getAll('testimonials'),
            seoMetaTitle: formData.get('seoMetaTitle'),
            seoMetaDescription: formData.get('seoMetaDescription')
        },
        { new: true }
    );

    return NextResponse.json({ success: true, message: 'Project updated successfully!', project: updatedProject });
}
