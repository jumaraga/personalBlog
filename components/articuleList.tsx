import styles from '../styles/Home.module.css'
import { Props } from '../logic/context'
import Link from 'next/link'
export function ArticuleList({ data }: any) {
    return (

        <div className={styles.grid}>
            {data.data.map((p:any) => (
                <div className={styles.articule}>
                    <Link href={`/${p.slug}`}>
                        <h2 className={styles.articule_titule}>{p.title}</h2>
                    </Link>
                    < img src={data.data?.imagen} className={styles.img1} />
                    <p className={styles.description}>{data.data?.description}</p>
                </div>)
            )}
        </div>
    )
}