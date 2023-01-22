import React from 'react';
import Link from 'next/link';
import dynamic from "next/dynamic";
const Animator = dynamic(
    import("react-scroll-motion").then((it) => it.Animator),
    { ssr: false }
);
import { useState, useEffect, useRef } from 'react';
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import EventsPage from '../events';

"/Images/maxresdefault.jpg"
const LandingPage = () => {

    return (
        <div>
            <section id="main"><TitleComponent /></section>
            <section id="contact">
                <div className='landing-contact' style={{ backgroundColor: "black" }} >
                    <div className='sub-heading-title' style={{ fontSize: "8vh", color: "rgb(250, 200, 200)" }}>Contact Us</div>
                    <div style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            flexFlow: "wrap",
                            alignItems: "center",
                            marginTop: "1%",
                            height: "60vh",
                            backgroundImage: "url(/metamorphosisLogo.svg)",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            filter: "invert(100%)"
                        }}
                        className='landing-cards'
                    >
                        <div className='landing-card' style={{ background: "none", color: "black" }}>
                            <div style={{}} className='card-title'>
                                <b> ELAS BPHC</b>
                            </div>
                            <div className='card-time'>
                                Email : <a style={{ opacity: 0.5, color: "black" }} href='mailto:elas@hyderabad.bits-pilani.ac.in'>elas@hyderabad.bits-pilani.ac.in</a>
                            </div>
                            {/* <div className='card-desc'>
                                Phone : <a style={{ opacity: 0.5, color: "black" }} href="phone:1234GETONTHEDANCEFLOOR">1234GETONTHEDANCEFLOOR</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const TitleComponent = () => {

    const FadeUp = batch(Fade(), Move(), Sticky());
    const [isMobile, setMobile] = useState(false);
    const [lowHeight, setLowHeight] = useState(false);
    useEffect(() => setMobile(window.matchMedia("(max-width: 1024px)").matches), [window.matchMedia("(max-width: 1024px)").matches]);
    useEffect(() => setLowHeight(window.matchMedia("(max-height: 500px)").matches), []);
    return (
        <ScrollContainer>
            <section id="main">
                <ScrollPage>
                    <Animator animation={batch(Sticky(), Fade())}>
                        <div className='title-image' />
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -20))}>
                        <div className='title'>VÈRBA MAXIMUS {!isMobile ? <></> : <br />}2023</div>
                    </Animator>


                    <Animator animation={batch(Fade(), Sticky(50, !lowHeight ? 60 : 80), MoveOut(0, -20))}>
                        <div className='sub-title'>28-29 JAN</div>
                    </Animator>
                </ScrollPage>
            </section>

            <ScrollPage>
                <Animator animation={FadeUp}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <div style={{ fontSize: !isMobile ? "10vw" : "7vh" }}>Metamorphosis</div>
                        <div style={{ fontSize: !isMobile ? "1.5vw" : "2vh", marginTop: "6vh", textAlign: "center" }}>Theme for the Annual English Language Activies Society&apos;s literary fest of the year here at <br /> BITS Pilani, Hyderabad Campus.<br /><br /><Link href='https://docs.google.com/spreadsheets/d/1Rbm5mTJiMnaydnvBmk2561Ob3HEP3uuOgECIM5DEWg8/edit?usp=sharing' style={{ "color": 'blue' }}>Schedule</Link> | <Link href='https://unstop.com/creative-cultural-event/verba-maximus-23-complete-pass-verba-maximus-birla-institute-of-technology-science-bits-pilani-591176' style={{ "color": 'blue' }}>Register</Link></div>
                    </div>
                </Animator>
            </ScrollPage>

            <section id="eventslanding"><EventsPage /></section>

            <div className='landing-events' id="pricing" style={{
                backgroundColor: "#ffb6c1"
            }}>
                <div className='sub-heading-title'>PRICING AND REGISTRATION</div>
                <div className='landing-cards'>
                    <div className='landing-card'>
                        <div className='card-title'>
                            {"Comedy Night Pass"}
                        </div>
                        <div className='card-time'>
                            {"Rs. 300/-"}
                        </div>
                        <div className='card-desc'>
                            {"\n\nAccess to the comedy night :)"}
                        </div>
                    </div>

                    <div className='landing-card'>
                        <div className='card-title'>
                            {"Fest Pass"}
                        </div>
                        <div className='card-time'>
                            {"Rs. 300/-"}
                        </div>
                        <div className='card-desc'>
                            {"\n\nAccess to all events except proshow"}
                        </div>
                    </div>

                    <div className='landing-card'>
                        <div className='card-title'>
                            {"Online Pass"}
                        </div>
                        <div className='card-time'>
                            {"Rs. 100/-"}
                        </div>
                        <div className='card-desc'>
                            {"\n\nAccess to all the online and hybrid events"}
                        </div>
                    </div>

                </div>
                <Link scroll={false} className='register' href='https://unstop.com/creative-cultural-event/verba-maximus-23-complete-pass-verba-maximus-birla-institute-of-technology-science-bits-pilani-591176'>Register Now!!</Link>
                <br /> <br />
            </div>
        </ScrollContainer>
    )
}



export default LandingPage;
