import styles from '../styles/Home.module.css'
import ReactMarkdown from 'react-markdown'
import { db } from '../logic/context'
export function SinglePost({ data }: any) {
    const { title, markdown, createdAt } = data.data
    let date
    date = new Date(createdAt)
    function format(mask: any, value: any, language = 'spanish') {

        const darMes=(mes:Number)=>{
            switch (mes) {
                case 1:
                    return 'Ene'
                case 2:
                    return 'Feb'
                case 3:
                    return 'Marzo'
                case 4:
                    return 'Abril'
                case 5:
                    return 'Mayo'
                case 6:
                    return 'Junio'
                case 7:
                    return 'Julio'
                case 8:
                    return 'Agosto'
                case 9:
                    return 'Setiembre'
                case 10:
                    return 'Octubre'
                case 11:
                    return 'Noviembre'
                case 12:
                    return 'Diciembre'
            }
        }
        return mask
            .replace(/@y/g, value.getFullYear())
            .replace(/@m/g, darMes(value.getMonth() + 1))
            .replace(/@d/g, value.getDate())
            .replace(/@h/g, value.getHours())
            .replace(/@i/g, value.getMinutes())
            .replace(/@s/g, value.getSeconds())
            .replace(/@l/g, value.getMilliseconds())
    }
    date = format('@d de @m del @y', date)

    console.log(date)
    return (
        <div className={styles.singlePost}>
            <div>

                <img className={styles.singleImg} src="https://cdn.pixabay.com/photo/2016/10/22/17/46/mountains-1761292_960_720.jpg" alt="" />
                <h1 style={{ padding: '20px 50px 0px', fontSize: '3rem', fontWeight: '800' }}>{title}</h1>
                <p style={{ padding: '10px 50px 0px', }}>{date}</p>
                <div className={styles.singlePostPaddid}>

                </div>
            </div>
            <div className={styles.SinglePostText}>
                <ReactMarkdown children={markdown} />
            </div>
        </div>
    )
}   
