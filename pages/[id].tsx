import { NavBar } from "../components/navBar"
import { SideBar } from "../components/sideBar"
import styles from '../styles/Home.module.css'
import { SinglePost } from "../components/singlePost";
import json from './info.json'
import axios from "axios";
import { Props } from "../logic/context";
export default function articule({ data }: Props) {
    const info = json
    return (
        <>
            <NavBar />
            <div className={styles.main}>
                <SinglePost />
                <SideBar data={info} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    try {

        return {
            paths: [
                {
                    params: {
                        id: '1'
                    }
                }
            ],
            fallback: true // false or 'blocking'
        };
    } catch (e) {
        console.log(e)
    }

}
export async function getStaticProps() {
    let res
    fetch("http://localhost:3000/api/getArticule")
        .then((res) => {
            console.log(res)
            res.json()
        })
        .then((data) => {
            res = data
        });
    return { props: { res } }
}