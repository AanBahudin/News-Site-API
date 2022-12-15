import Link from 'next/link'

const Error = () => {

    return (
        <>
            <section className='flex flex-col h-[100vh] my-auto font-poppins items-center justify-center'>
                <h1 className='text-slate-500 font-semibold text-3xl '> <span className='text-blue'> Oops </span>, Something is wrong</h1>
                <Link href='/'>
                    <p className='text-blue text-xl py-4 cursor-pointer'>back to homepage</p>
                </Link>
                
            </section>
        </>
    )
}

export default Error