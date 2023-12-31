import Head from 'next/head';
import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { useState, useEffect, useRef } from 'react';
const EventsPage = () => {
    const [eventShown, setEventShown] = useState(false)
    const [event, setEvent] = useState({
        title: "",
        time: "",
        desc: ""
    })
    const showEvent = (index, arr) => {
        setEvent(arr[index]);
        setEventShown(true);
    }
    const events = [
        {
            title: "Sinful Symphony",
            desc: `Step into the extraordinary as we blend Dante's Inferno sins with the art of expression! In one bowl, the notorious nine sins await-lust, gluttony, greedy, wrath, envy, sloth, pride, avarice and despair. In another, dynamic performances beckon-debates, speeches, stories, essays, lawyer's closings, justifications.
            Contestants draw one sni and one performance, crafting an unpredictable fusion. Witness an unparalleled showcase where sin meets storytelling, and performers unravel the unexpected.
            Welcome to Sinful Symphony, where the stage is set for a riveting exploration of the human spirit and the boundaries of artistic prowess!
            `,
            time: "Sat: 1pm F102"
        }, {
            title: "Sherlocked",
            desc: `There has been a murder on campus. In this evolving case involving 8 individuals, confusion has been the only constant. You are the only shot we have at solving this murder mystery. Interrogate the 8 suspects at SHERLOCKED, VM 2023 and help us crack the case`,
            time: "Sun: 4pm F105"
        },
        {
            title: "FINAL FANTASY",
            desc: `Have you ever thought about trying your hand at PG-18 content?
            Here's a call to all the smut enthusiasts and fan-fiction fanatics!
            Give catharsis to the unspoken desires of your mind but with a twist. Through this contest, produce your erotic literature from our in-house, campus-friendly prompts.
            `,
            time: "Sat: 1pm F103"
        },

        {
            title: "Hindi Tarang's YOUTH MAHASABHA ",
            desc: `Youth Mahasabha, Hindi Tarang’s biggest debate, is coming your way! A discussion among popular logicians, theologians and jurists who contribute their ideas to the public discourse. Get ready for a rollercoaster of sociocultural issues, dilemmas, philosophy, ethics, and economies.

            `,
            time: "Sat: 4pm F104"
        },
        {
            title: "Safl's BAMBOOZLED",
            desc: `This Verba Maximus, Sanskrit and Foreign Languages Club, BPHC brings to you, "𝑩𝒂𝒎𝒃𝒐𝒐𝒛𝒍𝒆𝒅" - inspired by the famous sitcom F.R.I.E.N.D.S but with a few unique twists of our own .
            Participate in teams of two as you battle it out. Get ready to solve puzzles, uncover identities, and test the limits of your problem solving skills as you and your partner advance through the levels- an ultimate display of wits and teamplay.
            
            And remember, the first rule of Bamboozled, is to not get bamboozled.
            `,
            time: "Sat: 3pm F105"
        },
        {
            title: "SYMPHONIES OF THE SOUL",
            desc: `Do you remember those days when you came back home from school feeling frustrated?  Or that time you woke up after a quick nap and felt an inexplicable longing to sit by the window and think?  Well if you did.. now is the right time to put those thoughts to words because the Music club is here to bring out the poet in you with Symphonies of the soul. We play the instruments and you write the songs. Get that hand moving and write about whatever the melodies make you feel.`,
            time: "Sat: 4pm OAT"
        },
        {
            title: "Slam Poetry",
            desc: "Slam is a competitive event in which poets perform spoken word poetry in front of a live audience and a panel of judges. A poem is a form of expressing oneself in the utmost creative way possible. Rhyming or non-rhyming, narrative or Lyrical, the participants will have the right to write whatever and however they want.",
            time: "Sun: 9am G105"
        },
        {
            title: "ShipWrecked",
            desc: `A plethora of your favourite characters from popular culture running the gamut from politicians, animated characters, billionaires, sportspersons, cartoons, to name a few, find themselves on a sinking ship. But voila! There is just a single life jacket. Put yourself in their shoes and argue for why they deserve to be saved against others.
            `,
            time: "Sun: 9am G101 & G102"
        },
        {
            title: "JAM",
            desc: ` Do you take pride in your communication capabilities? Can you handle the pressure of a ticking clock well? Can you speak impromptu without faltering? Lo and behold…the stage is yours!

            We bring to you BPHC’s JAM, Just A Minute, an interesting competition where you have only a minute to speak your mind. Oh—and also be pounced on by ten others for every single stutter and stammer. But keep in mind this is not a public-speaking contest or a debate-contest but one of wit and level-headedness! A super-fun and challenging competition, we promise you fun, challenges and entertainment!
            `,
            time: "Sun: 11am G103 & G104"
        },
        {
            title: "Shloka Recitation",
            desc: `This event will be conducted by an organisation and will be allowing individual participation. The participants will be asked to memorise a part of the Bhagavad Gita for the event with each participant getting 5 minutes for shloka recitation.
            Three judges from the organisation will be judging their recitation. Participants should know the reference of the shlokas and will also be asked for the explanation of the recited shlokas. The winners will be awarded with cash prizes.
            `,
            time: "Sun: 2pm G107"
        },
        {
            title: "Marathon of madness",
            desc: `Each member will have a quest depending on their position in the relay. Each task will be a clue for the task assigned to the next member. Our quests will include deciphering the bahmani script, spell bee, chinese whisper, charades and identifying the murderers.`,
            time: "Sun: 1pm G106"
        },
        {
            title: "BOL BACHCHAN",
            desc: `
            To all the music lovers, bilingualists and movie buffs; here is Bol Bachchan cordially inviting you to vibe and jam with other fans of Bollywood harmony! As we freshers recover from the Trauma of midterms and other exams, and seniors from their compres; here is a place where you can let your mind wander loose and play in teams to translate popular movie and song titles to various languages, guess amazing songs in a short span of time, and much more. Flaunt your skills with these songs in the intense rounds of contests. We at Hindi Tarang, bring you this fun and quirky game of semantics, translations, and guesses`,
            time: "Sun: 7pm OAT"
        },
        {
            title: "Quiz",
            desc: `Do you possess an urge to dive into the depths of knowledge about any and everything, be it books, culture, mythology or literature? 
            Do you never leave any stone unturned to constantly learn and improve ? 
            Do you think you have what it takes to compete with some of the brightest and aware minds?
            If your answer is yes, then you are at the right place. This Verba Maximus, ELAS and The Quiz Club in collaboration bring to you "THE LIT QUIZ". 
            Come and join us for an exciting event to explore more, showcase your vast realm of knowledge and participate in a win-win situation because as it is rightly said - "You either win or you learn."
            "
            `,
            time: "Sun: 12pm F102"
        }
    ]


    const onlineEvents = [
        {
            title: "ARG",
            desc: `Featuring a misrepresented story of cursed creations with superior power. A foundation trying to do everything it can to stop the chaos. And humanity being humanity’s enemy in a twisted game of tag. ANYTHING is possible within this realm. 
            Can you find reason within the confusion without causing the species itself to be destroyed? Find the true lore hidden within the most bizarre of clues.
            ARG aims to throw you off as much as it tries to set something up. The only thing holding you back is your imagination and deductive skills, so if you think you have what it takes, join us for ARG!
            `,
            time: "Sat: 2pm Online"
        },
        {
            title: "Devil's Advocate",
            desc: `Welcome to 'Devil's advocate'! Put that devious little mind of yours to the task of defending the indefensible. In this enigmatic game, prompts will be given that you must justify. Whether or not you believe it yourself, you must make sure the audience does after you're through with them. Your wits and morality will be challenged, language will flourish and incredible fun is assured!`,
            time: "Sat: 2pm G103 & G104"
        },
        {
            title: "RENAISSANCE",
            desc: `Re-birth themed writing prompts- rebirth of 2020s (may use covid-19 as inspiration as renaissance in the 21st century), rebirth in your own life (some event that changed your perception of the world), you being reborn as someone from the past you’ve always wanted to be (write a day in their life). `,
            time: "Sun: 9am F103"
        },
        {
            title: "Picture Perspective",
            desc: `Leonardo da Vinci once said " A poet would be overcome by sleep and hunger before being able to describe with words what a painter is able to depict in an instant". Paintings speak a thousand words, and along with the photography club, we are here to give you the opportunity to meticulously unravel a few complex brushstrokes.`,
            time: "Sat: 1pm G101 & G102"
        },
        {
            title: "Backstory",
            desc: `Unlock the secrets of history’s unsolved mysteries!
            Calling all detectives and aspiring sleuths to join us for a thrilling competition where participants will be given real life unsolved news pieces and tasked with writing a scenario that solves the mystery. Put your detective skills to the test and uncover the truth about some of history’s most intriguing unsolved cases. Register now for this event.
            `,
            time: "Sun: 12pm F107"
        },
    ]

    return (
        <div>
            <Head>
                <title>Verba Maximus 2024</title>
                <meta name="description" content="Official website for VM '24" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <section id="events">
                <div className='landing-events' id="events">
                    <div className='sub-heading-title'>EVENTS</div>
                    {eventShown && <EventDetail name={event.title} desc={event.desc} time={event.time} setEventShown={setEventShown} onClickOutside={() => setEventShown(false)}></EventDetail>}
                    <div className='landing-cards' >
                        {events.map((event, i) => {
                            return (<div className='landing-card' onClick={() => showEvent(i, events)} key={i}>
                                <div className='card-title'>
                                    {event.title}
                                </div>
                                <div className='card-time'>
                                    <b>TIME</b>: {event.time}
                                </div>
                                <div className='card-desc'>
                                    {event.desc.toString().slice(0, 100)}...
                                </div>
                            </div>)
                        })}
                    </div>

                    <div className='sub-heading-title'>HYBRID EVENTS</div>
                    {eventShown && <EventDetail name={event.title} desc={event.desc} time={event.time} setEventShown={setEventShown} onClickOutside={() => setEventShown(false)}></EventDetail>}
                    <div className='landing-cards' >
                        {onlineEvents.map((event, i) => {
                            return (<div className='landing-card' onClick={() => showEvent(i, onlineEvents)} key={i}>
                                <div className='card-title'>
                                    {event.title}
                                </div>
                                <div className='card-time'>
                                    <b>TIME</b>: {event.time}
                                </div>
                                <div className='card-desc'>
                                    {event.desc.toString().slice(0, 100)}...
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}


const EventDetail = ({ name, time, desc, setEventShown, onClickOutside }) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);
    return (
        <div ref={ref} className='event-detail-card'>
            <div className='detail-title'>
                {name.toUpperCase()}
            </div>
            <div className='detail-time'>
                TIME : {time}
            </div>
            <div className='detail-desc'>
                {desc}
            </div>
            <button className='exit' onClick={(e) => {
                e.preventDefault();
                setEventShown(false);
            }}>
                CLOSE
            </button>
        </div>
    )
}

export default EventsPage;
