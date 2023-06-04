import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          ShuttrVault - Photo galleries made simple for photographers
        </title>
        <meta
          name="description"
          content="Effortlessly upload, organise, and share your client photos in secure, professional galleries."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
