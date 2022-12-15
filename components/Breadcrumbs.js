import Link from "next/link"

const Breadcrumbs = ({path}) => {
    return (
        <section className="w-full p-5 bg-slate-300 text-black/70 rounded">
            <h1 className="text-xl md:text-3xl font-bold">
                <Link className="text-black" href='/'>Home / </Link>
                <span>{path}</span>
            </h1>
        </section>
    )
}

export default Breadcrumbs