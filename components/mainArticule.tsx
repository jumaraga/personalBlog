import style from '../styles/Home.module.css'  

  type props = {data :{
        titulo:string,
        imagen?:string,
        resumen:string,
        categoria:string,
        texto:string
    }[]}

export function MainArticule(){
    return(
        <section className={style.mainArticule}>
            <div className={style.mainArtLeft} >
                <h2 className={style.tituloP}>titulo</h2>
                <p>resumen</p>
                <p>Categoria</p>
                <div className={style.social}>
                    redesSociales
                </div>
            </div>
        <div className={style.mainArtRight}>
                <img src="" alt="" />
                asdasd
            </div>
        </section>
    )
}