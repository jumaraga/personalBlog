import styles from '../styles/Home.module.css'
import { Props } from '../logic/context'
export function ArticuleList( {data} :Props){

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