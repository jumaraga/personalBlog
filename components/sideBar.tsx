import { type } from "os";
import style from '../styles/articule.module.css'
import React, { Children, JSXElementConstructor, ReactNode } from "react";
import Link from "next/link"
import { Props } from "../logic/context";
import axios from "axios";

export function SideBar({ data }: Props) {
    const author= 'hola'
    return (
        <aside>
            { author
            ? <div className="author">
                <h3 className={style.titule} >Autor del articulo</h3>
                <div>
                    <div>
                        <a href="">
                            <div className={style.container}>
                                <img className={style.authorImg} src="https://yt3.ggpht.com/yti/APfAmoGZItNF9fgEgNvORz8D3-nWdou28yIyOipx8A=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
                                <h4>Nombre del autor</h4>
                            </div>
                        </a>
                        <p className={style.other}>Datos a agregar como universidad o trabajo</p>
                    </div>
                </div>
            </div>
            : ''}
            <ul className={style.categia}>
                <Link href=''><a>Tecnología</a></Link>
                <Link href=''><a></a></Link>
                <Link href=''><a></a></Link>
            </ul>

            <div className={style.lastPost}>

            </div>
        </aside>
    )
}
