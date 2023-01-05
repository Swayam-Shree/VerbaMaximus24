import { Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Slideshow = () => {
	const events = [
		{
			name:"Sherlocked",
			desc:`There has been a murder on campus. In this evolving case that has roped in eight separate individuals, confusion has been the only constant. You are our only shot at solving this murder mystery. Interrogate and cross-examine the eight suspects as you attempt to uncover the truth at SHERLOCKED, VM 2O22, and help us crack the case!`,
			img:"images/image-1.png"
		},
		{
			name:"ARG",
			desc:`ARG - “Alternate Reality Game” is an internet maze where your team navigates through an online labyrinth in search for answers of a gripping story that has twists and turns at every corner. Can you braid together the web of clues present in the vastness of cyberspace and unravel the nuances of the narratives? `,
			img:"images/image-2.png"
		},
		{
			name:"Shipwrecked",
			desc:`Participants have to use only words to ensure their survival in a particularly sticky situation Stranded on a slowly sinking ship, as each minute ticks down, you inch ever so closer to your (possibly?) inevitable demise.As you choose a character from pop culture - books, shows or television, words are all you have to convince the moderator to give you the life-jacket`,
			img:"images/image-3.png"
		},
		{
			name:"Superposition",
			desc:`As we visit ideas, landscapes, and scenarios from each of our three motifs, each one more evocative and vivid than the last, it’s up to you to write your path through this concept-jumping, interdimensional journey.`,
			img:"images/image-4.jpg"
		},
		{
			name:"JAM",
			desc:`In everyone’s favourite rapid-action, tongue-twister game, your finger (or in this case, mouth) must be on the trigger like never before. How long can you run your mouth before you’re picked off by someone else?`,
			img:"images/image-5.png"
		},
		
	]
	const images = [
		"images/image-1.png",
		"images/image-2.png",
		"images/image-3.png",
		"images/image-4.jpg",
		"images/image-5.png",
	];

	const zoomInProperties = {
		indicators: true,
		
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow: (
			<div className="ml-3 lg:ml-20" style={{ width: "50px", opacity:"0.7"}}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div className="mr-3 lg:mr-20" style={{ width: "50px", opacity:"0.7" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
	};
	return (
		<div className="m-4 overflow-x-visible">
			
			<Slide canSwipe={true} autoplay={true} {...zoomInProperties} >
				{events.map((each, index) => (
					<div key={index} className="flex flex-col items-center w-full h-full">
							<h1 className="mb-3 font-bold text-5xl text-center">
								{each.name}
							</h1>
							<img
								className="w-3/4 object-contain w-full h-full rounded-lg shadow-xl"
								src={each.img}
							/>
						
							<h1 className="text-3xl relative bottom-0 w-full lg text-black-50">
								{each.desc}
							</h1>
						
					</div>
				))}
			</Slide>
		</div>
	);
};

export default Slideshow;