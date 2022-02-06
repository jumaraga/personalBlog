import styles from '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown'
export function SinglePost (){
    return(
        <div className={styles.singlePost}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg" alt="" />
                <h1></h1>
                <div className={styles.singlePostPaddid}>
               
                </div>
            </div>
        </div>
    )
}