import { appName } from 'app-config'
import Hello from 'components/Hello'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const HomePage: NextPage<{
  text: string;
}> = ({ text = "India" }) => {
  return (
    <>
      <Head>
        <title>{appName}</title>
      </Head>
      <div className="container">
        <div className="jumbotron hello">{text}</div>
        <Link passHref href={'/contact'}><a className='btn btn-warning'>Contact now!</a></Link>
      </div>
      <img src="/images/logo.png" alt="" />
      <Hello />
    </>
  )
}

export default HomePage
