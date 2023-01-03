
export default function Navbar() {
    return (
        <>
            <div className="fixed flex flex-wrap place-items-center z-10">
                <section className="mx-auto">
                    <nav className="flex justify-around bg-gray-900 text-white w-screen">
                        <div className="px-2 py-6 flex w-full items-center justify-around">
                            <a className="text-3xl font-bold font-heading" href="#home">
                                Metamorphosis.
                            </a>

                            <ul className="hidden md:flex font-semibold font-heading">
                                <li><a className="hover:text-gray-200 px-3" href="#">Events</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#schedule">Schedule</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#team">Team</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#contact">Contact</a></li>
                                <li><a className="hover:text-gray-200 px-3" href="#">Register</a></li>
                            </ul>
                        </div>

                        {/* <a className="navbar-burger self-center mr-12 md:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a> */}
                    </nav>
                </section>
            </div>
        </>
    )
}