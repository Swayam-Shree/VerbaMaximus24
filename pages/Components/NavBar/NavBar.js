import Link from 'next/link';
import React from 'react';
const NavBar = () => {
    function scrollToTop() {
        document.body.scrollTop = 0;   
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className='navbar'>
            <Link scroll={false} href='/' relative="path"><img src="/infernoLogo.svg" className='logo' onClick={scrollToTop} /></Link>
            <div className='headers'>
                <div className='element' onClick={scrollToTop}> 
                    <Link scroll={false} href='/'>Home</Link>
                </div>
                <div className='element'>
                    <Link scroll={false} href='/#events'>Events</Link>
                </div>
                <div className='element'>
                    <Link scroll={false} href='/#pricing'>Pricing</Link>
                </div>
                <div className='element'>
                    <Link scroll={false} href='/#contact'>Contact Us</Link>
                </div>
                {/* <Link scroll={false} width="5%" href='https://www.instagram.com/elas.bphc/' relative="path"><img width="20%" src="/instagram.png" /></Link> */}
                {/* <img src="/instagram.png" className='logo'/> */}
                <div className='element'>
                    <Link scroll={false} className='register' href='https://unstop.com/creative-cultural-event/verba-maximus-23-complete-pass-verba-maximus-birla-institute-of-technology-science-bits-pilani-591176'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
