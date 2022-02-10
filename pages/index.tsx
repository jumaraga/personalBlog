import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NavBar } from '../components/navBar'
import { SideBar } from '../components/sideBar'
import json from './info.json'
import { ArticuleList } from '../components/articuleList'
import { MainArticule } from '../components/mainArticule'
const Home: NextPage = ({ articule }: any) => {

  const info = json
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,700;1,400;1,500;1,600&family=Varela&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main >
        <MainArticule data={articule} />
        <div className={styles.main}>
        <ArticuleList data={articule}></ArticuleList>
        <SideBar data={articule} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
      <a href='https://www.freepik.es/fotos/mujer'>Foto de Mujer creado por freepik - www.freepik.es</a>
    </>
  )
}
export async function getStaticProps() {

    try {
        const res = await fetch("http://localhost:3001/api/getArticule")
        const data = await res.json()
        console.log(data)
        return { props: { articule: data } }
    } catch (e) {
        console.log(e)
    }

}
export default Home
