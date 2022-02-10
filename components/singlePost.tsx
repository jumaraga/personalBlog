import styles from '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown'
import { db } from '../logic/context'
export function SinglePost({ data }:any) {
    return (
        <div className={styles.singlePost}>
            <div>
                
                <img className={styles.singleImg} src="https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg" alt="" />
                <h1>{data?.data?.title}</h1>
                <div className={styles.singlePostPaddid}>

                </div>
            </div>
            <div className={styles.SinglePostText}>
                
                <p>{data?.data.markdown}</p>
                <ReactMarkdown children={data?.data.markdown}/>
            </div> 
        </div>
    )
}   
