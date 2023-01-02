
export default function Navbar() {
    return (
        <>
            <div className="fixed flex flex-wrap place-items-center z-10">
                <section className="mx-auto">
                    <nav className="flex justify-around bg-gray-900 text-white w-screen">
                        <div className="px-2 py-6 flex w-full items-center justify-around">
                            <a className="text-3xl font-bold font-heading" href="#home">
                                Verbamaximus.
                            </a>

                            <ul className="hidden md:flex font-semibold font-heading">
                                <li><a className="hover:text-gray-200 px-3" href="#">Events</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#team">Team</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#schedule">Schedule</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#contact">Contact</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#">Register</a></li>
                            </ul>
                        </div>

                        <a className="xl:hidden flex mr-6 items-center" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="flex absolute -mt-5 ml-4">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                        <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </nav>
                </section>
            </div>
        </>
    )
}