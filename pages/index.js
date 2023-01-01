import Head from 'next/head'
import { Inter } from '@next/font/google'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <section class="mb-32 text-gray-800 background-radial-gradient">
        <div class="px-6 py-12 md:px-12 text-center lg:text-left">
          <div class="container mx-auto">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
              <div class="mt-12 lg:mt-0">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12"
                  style={{ color: "hsl(218, 81%, 95%)" }}>
                  We are back :) <br /><span style={{ color: "hsl(218, 81%, 75%)" }}>Are you Ready?</span>
                </h1>
                <p class="text-lg" style={{ color: "hsl(218, 81%, 95%)" }}>
                  The English Language Activies Society is back again with the literary fest of the year here at BITS Pilani, Hyderabad Campus.
                </p>
              </div>
              <div class="mb-12 lg:mb-0">
                <div class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  style={{ paddingTop: "56.25%" }}>
                  <iframe class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                    allowfullscreen="" data-gtm-yt-inspected-2340190_699="true" id="240632615"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
