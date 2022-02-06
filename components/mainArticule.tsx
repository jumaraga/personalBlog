import style from '../styles/Home.module.css'  
import json from '../pages/info.json';
  type props = {data :{
        titulo:string,
        imagen?:string,
        resumen:string,
        categoria:string,
        texto:string
        fecha?:string
    }[]}

export function MainArticule({data}:props){
    return(
        <section className={style.mainArticule}>
            <div className={style.mainArtLeft} >
                <h2 className={style.tituloP}>{data[0].titulo}</h2>
                <p>resumenPersonaliza el scroll de tu web sólo con CSS</p>
                <p><span className={style.tag}></span> {data[0].categoria}</p>
                <p><span className={style.fecha}></span> {data[0].fecha}</p>
                <div className={style.social}>
                    
                </div>
            </div>
        <div className={style.mainArtRight}>
                <img src="https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fblogs%2Foriginal%2F97400745-a112-485f-b6de-906abcf562c4.png&w=1920&q=75" alt="" />
            </div>
        </section>
    )
}