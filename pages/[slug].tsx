import { NavBar } from "../components/navBar"
import { SideBar } from "../components/sideBar"
import styles from '../styles/Home.module.css'
import { SinglePost } from "../components/singlePost";
import json from './info.json'
import axios from "axios";
import { Props } from "../logic/context";
import { db } from "../logic/context";
import { Articule } from "../server/models";
export default function articule({ articule }: any) {
    const info = json
    return (
        <>
            <NavBar />
            <div className={styles.main}>
                <SinglePost data={articule} />
                <SideBar data={info} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    try {
        const res = await fetch("http://localhost:3001/api/getArticule")
        console.log(res)
        const posts = await res.json()

        console.log(posts, 'posts')
        return {
            paths: [
                { params: { slug: posts.data.slug } }
            ],
            fallback: true // false or 'blocking'
        };
    } catch (e) {
        console.log(e)
    }

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