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
    const showEvent = (index) => {
        setEvent(events[index]);
        setEventShown(true);
    }
    const events = [
        {
            title: "METAMORPHOSIS",
            desc: `Our theme's titular event, METAMORPHOSIS. Play the role of Gregor Samsa (from Metamorphosis by Kafka) as participants write their way out of sticky situations and challenges that we throw in their way! As part of the OC, we will have to come up with different prompts and situations for the participants to write on.`,
            time: "Sat: 1pm F102"
        }, {
            title: "Sherlocked",
            desc: `There has been a murder on campus. In this evolving case that has roped in eight separate individuals, confusion has been the only constant. You are our only shot at solving this murder mystery. Interrogate and cross-examine the eight suspects as you attempt to uncover the truth at SHERLOCKED, VM 2O22, and help us crack the case!`,
            time: "Sun: 4pm F105"
        },
        {
            title: "FINAL FANTASY",
            desc: `Here's a call to all the smut enthusiasts and fan-fiction fanatics! Did you get inspired after you read a piece by a connoisseur of the genre?
            Have you ever thought about trying your hand at pg 18 content?
            Ever had intrusive thoughts about starring 2 individuals from your campus in your unholy fan fics?
            Ever wanted to delve into details of deep fantasies and unspeakable scenarios? 
            
            Give catharsis to the unspoken desires of your mind but with a twist.
            Participate in this thrilling competition where you get to produce your own piece of erotic literature from our in house, campus friendly prompts!
            `,
            time: "Sat: 1pm F103"
        },
        {
            title: "Picture Perspective",
            desc: "With Picture Perspective, the photography club is here to give you an opportunity to stare deep into yourself as you carefully try to unravel the meaning of a few complex brushstrokes. Participants will be given picture prompts and will be given the opportunity to write according to their hearts desire.",
            time: "Sat: 1pm G101 & G102"
        },

        {
            title: "Devil's Advocate",
            desc: `Welcome to 'Devil's advocate'! Put that devious little mind of yours in defending the indefensible. In this exciting game, prompts will be given that you must justify. Whether or not you believe it yourself, you must make sure the audience does after you're through with them. Your wits and morality will be challenged, language will flourish and incredible fun is assured!`,
            time: "Sat: 2pm G103 & G104"
        },
        {
            title: "Hindi Tarang's YOUTH MAHASABHA ",
            desc: `Youth Mahasabha, Hindi Tarang’s biggest debate competition is coming your way. Unlike formal parliamentary debates, this is a debate among popular logicians, theologians and jurists, all with a different sense of logic, who contribute their ideas to the public discourse of the debate.
            
            We seek your participation in this round of intense brainstorming and add another feather to the ever-growing quilt of knowledge to the debate cum group discussion.
            
            Position all the areas of intellect to operate as we take you through a rollercoaster of topics, tunnels of sociocultural issues. We will be exploring not only topics that explore situational dilemmas, philosophy, ethics, and economics we will also take you through the latest points cooking up on current and world affairs.
            `,
            time: "Sat: 4pm F104"
        },
        {
            title: "Safl's BAMBOOZLED",
            desc: `This Verba Maximus,  Sanskrit and Foreign Languages Club, BPHC brings to you, inspired by the famous sitcom F.R.I.E.N.D.S but with a few unique twists "𝑩𝒂𝒎𝒃𝒐𝒐𝒛𝒍𝒆𝒅".
            Participate in teams of two and get ready for tons of fun as you battle it out in teams of two, solving puzzles, uncovering identities, and testing the limits of your problem solving skills as you and your partner advance through the levels, in the ultimate display of wits and teamplay.
            
            And remember, the first rule of Bamboozled, is to not get bamboozled.
            `,
            time: "Sat: 3pm F105"
        },
        {
            title: "SYMPHONIES OF THE SOUL",
            desc: "The Music club is here to bring out the poet in you within you. Symphonies of the soul. They play the instruments and you write the songs. Get that hand moving and write about whatever the melodies make you feel. ",
            time: "Sat: 4pm OAT"
        },
        {
            title: "RENAISSANCE",
            desc: `Re-birth themed writing prompts- rebirth of 2020s (may use covid-19 as inspiration as renaissance in the 21st century), rebirth in your own life (some event that changed your perception of the world), you being reborn as someone from the past you’ve always wanted to be (write a day in their life). `,
            time: "Sun: 9am F103"
        },
        {
            title: "Slam Poetry",
            desc: "Slam is a competitive event in which poets perform spoken word poetry in front of a live audience and a panel of judges. A poem is a form of expressing oneself in the utmost creative way possible. Rhyming or non-rhyming, narrative or Lyrical, the participants will have the right to write whatever and however they want.",
            time: "Sun: 9am G105"
        },
        {
            title: "ShipWrecked",
            desc: "A host of your favourite characters from popular culture find themselves on a sinking ship. The problem - there is only one life jacket. Put yourself in their shoes and argue for why they deserve to keep their life the most.  ",
            time: "Sun: 9am G101 & G102"
        },
        {
            title: "JAM",
            desc: `Are you a good speaker? Can you handle the pressure of a ticking clock well? Can you speak impromptu without faltering? Do you take pride in your communication capabilities? Behold…the stage is yours!

            We bring to you BPHC’s JAM, Just A Minute, an interesting competition where you have only a minute to speak your mind. Oh—and also be pounced on by ten others for every single stutter and stammer. This is not a public-speaking contest or a debate-contest! A super-fun and challenging competition, we promise you fun, challenges and entertainment!
            `,
            time: "Sun: 11am G103 & G104"
        },
        {
            title: "Shloka Recitation",
            desc: `This event will be conducted by an organisation.There will be individual participants for this event. They'll be asked to memorize a part of the wBhagavad Gita for the event. 3 judges from the organisation will be judging their recitation. Every participants will get 5 minutes for shloka recitation. Participants should know the reference of the shlokas. The participants will also be asked the explanation of the recited shlokas. The winners will be awarded with cash prizes.`,
            time: "Sun: 2pm G107"
        },
        {
            title: "CLASSROOM RELAY",
            desc: `Each team will be constituted with 4-5 members. There will be a quest for each member depending on their position in the re-lay. Each task will be a clue for the succeeding task assigned to the next member. For example our first quest is deciphering the bahamani script for which they'll be given a dictionary pertaining to that language. The participants have to go through the dictionary and decipher the script which is also a clue for the next task which will be solved by the 2nd member. Ultimately after solving each quest which is linked consecutively the final quest will lead them to the final answer.
            The team to come up with the answer in the shortest time will be the winner of the re-lay.
            The quests could be of the following formats: Decipher the script, spell bee, charades (linguistic), chinese whisper, Identify the murderer
            `,
            time: "Sun: 1pm G106"
        },

        {
            title: "Backstory",
            desc: `Unlock the secrets of history’s unsolved mysteries!
            Calling all detectives and aspiring sleuths to join us for a thrilling competition where participants will be given real life unsolved news pieces and tasked with writing a scenario that solves the mystery. Put your detective skills to the test and uncover the truth about some of history’s most intriguing unsolved cases. Register now for this one  event.
            `,
            time: "Sun: 12pm F107"
        },
        {
            title: "BOL BACHCHAN",
            desc: `
            To all the music lovers, bilingualists and movie buffs; here is Bol Bachchan cordially inviting you to vibe and jam with other fans of Bollywood harmony! As we freshers recover from the Trauma of midterms and other exams, and seniors from their compres; here is a place where you can let your mind wander loose and play in teams to translate popular movie and song titles to various languages, guess amazing songs in a short span of time, and much more. Flaunt your skills with these songs in the intense rounds of contests. We at Hindi Tarang, bring you this fun and quirky game of semantics, translations, and guesses`,
            time: "Sun: 7pm OAT"
        },
        {
            title: "Quiz",
            desc: `Are you one of those inquisitive minds, having an urge to dive into the depths of knowledge about any and everything, be it books, culture, mythology or literature? Are you one of those who never leave any stone unturned to constantly learn and improve ? Do you think you have what it takes to compete with some of the brightest and aware minds? If your answer is yes, then you are at the right place. This Verba Maximus, ELAS and The Quiz Club in collaboration bring to you "THE LIT QUIZ". Come and join us for an exciting event to explore more, showcase your vast realm of knowledge and participate in a win-win situation because as it is rightly said - "You either win or you learn."
            `,
            time: "Sun: 12pm F102"
        }
    ]


    const onlineEvents = [
        {
            title: "ARG",
            desc: `ARG - “Alternate Reality Game” is an internet maze where your team navigates through an online labyrinth in search for answers of a gripping story that has twists and turns at every corner. Can you braid together the web of clues present in the vastness of cyberspace and unravel the nuances of the narratives?
        Mental fortitude and thinking on your feet are helpful traits as the ARG is sure to test your patience, but rest assured it’s a very rewarding experience that is sure to satiate your thirst for an adventurous thrill.`,
            time: "Sat: 2pm Online"
        },
    ]

    return (
        <div>
            <Head>
                <title>Verba Maximus 2023</title>
                <meta name="description" content="Official website for VM '23" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <section id="events">
                <div className='landing-events' id="events">
                    <div className='sub-heading-title'>EVENTS</div>
                    {eventShown && <EventDetail name={event.title} desc={event.desc} time={event.time} setEventShown={setEventShown} onClickOutside={() => setEventShown(false)}></EventDetail>}
                    <div className='landing-cards' >
                        {events.map((event, i) => {
                            return (<div className='landing-card' onClick={() => showEvent(i)} key={i}>
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

                    <div className='sub-heading-title'>ONLINE+OFFLINE EVENTS</div>
                    {eventShown && <EventDetail name={event.title} desc={event.desc} time={event.time} setEventShown={setEventShown} onClickOutside={() => setEventShown(false)}></EventDetail>}
                    <div className='landing-cards' >
                        {onlineEvents.map((event, i) => {
                            return (<div className='landing-card' onClick={() => showEvent(i)} key={i}>
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
