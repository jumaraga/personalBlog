import styles from '../styles/Home.module.css'
    type props = {data :{
        titulo:string,
        imagen?:string,
        resumen:string,
        categoria:string,
        texto:string
    }[]}
export function ArticuleList( {data} :props){

    return(

        <div className={styles.grid}>
            {data.map(i=>(
                <div className={styles.articule}>
                    <h2 className={styles.articule_titule}>{i.titulo}</h2>
                    < img src={i.imagen} className={styles.img1}/>
                    <p className={styles.description}>{i.texto}</p>
                </div>
            ))}
        </div>
    )
}