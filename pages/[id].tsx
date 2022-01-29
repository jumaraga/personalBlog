import { NavBar } from "../components/navBar"
import { SideBar } from "../components/sideBar"
import styles from '../styles/Home.module.css'
import { SinglePost } from "../components/singlePost";
import json from './info.json'
type Props = {
    data: {
        titulo: string,
        imagen?: string,
        resumen: string,
        categoria: string,
        texto: string
    }[]
}

export default function articule(){
    const info =json 
    return(
        <>
        <NavBar />
        <div className={styles.main}>
        <SinglePost/>
        <SideBar data={info} />
        </div>
        </>
    )
}