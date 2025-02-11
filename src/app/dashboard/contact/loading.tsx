export default function Loading() {
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
                        {Array.from({ length: 5 }).map((_, index) => (
                            <tr key={index} className='animate-pulse'>
                                <td className='px-6 py-4'>
                                    <div className='h-4 rounded bg-gray-300'></div>
                                </td>
                                <td className='px-6 py-4'>
                                    <div className='h-4 rounded bg-gray-300'></div>
                                </td>
                                <td className='px-6 py-4'>
                                    <div className='h-4 rounded bg-gray-300'></div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
