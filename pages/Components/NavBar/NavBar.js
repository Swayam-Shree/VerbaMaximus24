import Link from 'next/link';
import React from 'react';
const NavBar = () => {
    return (
        <div className='navbar'>
            <Link scroll={false} href='/#main' relative="path"><img src="/metamorphosisLogo.svg" className='logo'/></Link>
            <div className='headers'>
                <div className='element'> 
                    <Link scroll={false} href='/#main'>Home</Link>
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
                <div className='element'>
                    <Link scroll={false} className='register' href='https://unstop.com/creative-cultural-event/verba-maximus-23-complete-pass-verba-maximus-birla-institute-of-technology-science-bits-pilani-591176'>Register</Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
