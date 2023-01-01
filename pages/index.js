import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const team = [
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },
    {
      name: "temporary",
      post: "temporary",
      image: "imageholder"
    },  
  ]

  return (
    <>
      <Head>
        <title>Verbamaximus | Home</title>
        <meta name="description" content="Home page for verbamaximus home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Landing Segment */}
      <section className="text-gray-800 background-radial-gradient pt-16" id="home">
        <div className="px-6 py-12 md:px-12 text-center lg:text-left">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                  style={{ color: "hsl(218, 81%, 95%)" }}>
                  Metamorphosis<br /><span style={{ color: "hsl(218, 81%, 75%)" }}>Here we come!</span>
                </h1>
                <p className="text-lg" style={{ color: "hsl(218, 81%, 95%)" }}>
                  The English Language Activies Society is back again with the literary fest of the year here at BITS Pilani, Hyderabad Campus.
                </p>
              </div>
              <div className="mb-12 lg:mb-0">
                <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  style={{ paddingTop: "56.25%" }}>
                  <iframe className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/BckJlGkrMPY?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule">
        <div className="bg-[#420404] text-white py-8 w-100">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-[#FFD6D6] uppercase tracking-loose">Schedule</p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Event Timeline</p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here’s your guide to Metamorphosis, Verbamaximus 2023.
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ right: "50%", border: "2px solid #FFD6D6", borderRadius: "1%" }}></div>
                  <div className="border-2-2 border-yellow-555 absolute h-full border"
                    style={{ left: "50%", border: "2px solid #FFD6D6", borderRadius: "1%" }}></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#FFD6D6]">1-6 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Registration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Pick your favourite event(s) and register in that event by filling the form corresponding to that
                        event. Its that easy :)
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 text-base text-[#FFD6D6]">6-9 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Participation</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        Participate online. The links for your registered events will be sent to you via email and whatsapp
                        groups. Use those links and show your talent.
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 text-base text-[#FFD6D6]"> 10 May, 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                        announced on the whatsapp groups and will be mailed to you.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 text-base text-[#FFD6D6]">12 May, 2021</p>
                      <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Prize Distribution</h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        The winners will be contacted by our team for their addresses and the winning goodies will be sent at
                        their addresses.
                      </p>
                    </div>
                  </div>
                </div>
                <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="text-gray-800 text-center bg-[#FFD6D6] py-10">
        <h2 class="text-3xl font-bold mb-12">Meet the <u class="text-amber-900">TEAM</u></h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-xl-12">
          {
            team.map(member => (
              <div class="mb-12 lg:mb-0 py-3">
                <img class="rounded-lg shadow-lg mb-6 mx-auto" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  alt="avatar" style={{ width: "150px" }} />
                <h5 class="text-lg font-bold mb-4 uppercase">{member.name}</h5>
                <p class="mb-6 uppercase">{member.post}</p>
                <ul class="list-inside flex mx-auto justify-center">
                  <a href="#!" class="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="w-4 h-4 text-blue-600">
                      <path fill="currentColor"
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                  </a>
                  <a href="#!" class="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 text-blue-600">
                      <path fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                  <a href="#!" class="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-4 h-4 text-blue-600">
                      <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </ul>
              </div>
            ))
          }

        </div>
      </section>
    </>
  )
}
