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

        <div class="px-5 grid md:grid-cols-4 gap-x-3 lg:gap-x-12">
          {
            team.map((member, _) => (
              <div class="mb-6 lg:mb-0 p-3" key={_}>
                <div class="bg-white block rounded-lg shadow-lg">
                  <div class="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" class="w-full rounded-t-lg" />
                    <a href="#!">
                      <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg class="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}>
                      <path fill="#fff"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div class="p-6">
                    <h5 class="text-lg font-bold mb-4 uppercase">{member.name}</h5>
                    <p class="text-gray-500 mb-4 uppercase">{member.post}</p>
                  </div>
                </div>
              </div>))
          }
        </div>
      </section>
    </>
  )
}
