import { Schema, model, models } from 'mongoose';

const projectSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        slug: { type: String, required: true, unique: true },
        description: { type: String, required: true },
        content: { type: String },
        technologies: [String],
        liveUrl: { type: String },
        repoUrl: { type: String },
        images: [String],
        tags: [String],
        startDate: { type: Date },
        endDate: { type: Date },
        status: { type: String, enum: ['completed', 'in-progress', 'paused'], default: 'completed' },
        featured: { type: Boolean, default: false },
        order: { type: Number },
        contributors: [String],
        videoUrl: { type: String },
        category: { type: String },
        challenges: { type: String },
        results: { type: String },
        testimonials: [String],
        seoMetaTitle: { type: String },
        seoMetaDescription: { type: String }
    },
    { timestamps: true }
);

const Project = models.Project || model('Project', projectSchema);
export default Project;
