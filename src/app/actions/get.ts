export async function getBlogs() {
    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/blog`, {
        cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');

    const data = await res.json();
    return data.blogs;
}

export async function getProjects() {
    const res = await fetch(`https://mohammad-shuaib.vercel.app/api/project`, {
        cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch projects');

    const data = await res.json();
    return data.projects;
}
