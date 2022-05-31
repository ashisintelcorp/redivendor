import { appName } from 'app-config'
import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contact - {appName}</title>
      </Head>
      <div className="container">
        <div className="jumbotron hello">Contact</div>
      </div>
    </>
  )
}

export default HomePage
