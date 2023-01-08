import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Imaiger Dashboard App</title>
        <meta name="description" content="Imaiger dashboard app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Imaiger Dashboard App</h1>
    </div>
  )
}
