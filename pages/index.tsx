import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-none">
      <Head>
        <title>Instagram Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal />
      <Header />
      <Feed />
    </div>
  )
}

export default Home

//  For BWB I need:
//  - Product Pages
//  - Blog Pages (with or without CMS)
//  - Shopify Storefront API integration
//  - Use firebase for storage?
//  - build a 3 part grid display
