export default async function Page() {
    const res = await fetch(`${process.env.NEXT_API_URL}/api/contact`, {
        next: { revalidate: 100 * 60 }
    });
    const data = await res.json();
    return (
        <div className='mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12'>
            <h1 className='mb-6 text-center text-3xl font-extrabold text-gray-800'>Messages</h1>
            <div className='overflow-x-auto rounded-2xl p-1'>
                <table className='min-w-full overflow-hidden rounded-xl bg-white'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-4 text-left text-sm font-medium tracking-wider text-gray-600 uppercase'>
                                Name
                            </th>
                            <th className='px-6 py-4 text-left text-sm font-medium tracking-wider text-gray-600 uppercase'>
                                Email
                            </th>
                            <th className='px-6 py-4 text-left text-sm font-medium tracking-wider text-gray-600 uppercase'>
                                Message
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200'>
                        {data &&
                            data.message.map((message: any) => (
                                <tr key={message._id} className='transition-all hover:bg-gray-50'>
                                    <td className='px-6 py-4 text-sm font-medium text-gray-700'>{message.name}</td>
                                    <td className='px-6 py-4 text-sm text-gray-700'>{message.email}</td>
                                    <td className='px-6 py-4 text-sm text-gray-700'>{message.message}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
