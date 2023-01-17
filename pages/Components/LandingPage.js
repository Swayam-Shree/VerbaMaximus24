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
                </ScrollPage></section>
            <ScrollPage>
                <Animator animation={FadeUp}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <div style={{ fontSize: !isMobile ? "10vw" : "7vh" }}>Metamorphosis</div>
                        <div style={{ fontSize: !isMobile ? "1.5vw" : "2vh", marginTop: "6vh", textAlign: "center" }}>The English Language Activies Society is back again with the literary fest of the year here at <br /> BITS Pilani, Hyderabad Campus.</div>
                        {/* <div style={{ fontSize: !isMobile ? "1.5vw" : "2vh", marginTop: "6vh", textAlign: "center", color: 'blue' }}><Link href="/events/">Click here to know more about the various events being conducted</Link></div> */}
                    </div>
                </Animator>
            </ScrollPage>
            <section id="eventslanding"><EventsPage /></section>
        </ScrollContainer>
    )
}



export default LandingPage;
