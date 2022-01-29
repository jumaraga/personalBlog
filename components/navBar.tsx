import Link from "next/link"
import '../styles/frontpage.module.css'
import style  from  '../styles/articule.module.css'
export function NavBar (){
    return(
        <>
            <header className="header">
                <Link href="/">
                    <p className={style.p}>Categorias</p>
                </Link>
                <p className="title">Dopamina Reactiva</p>
                <Link  href="/" >
                    <p className={style.p}>Home</p>
                </Link>
                <span className={style.icon}>  </span>
                <input type="text" className={style.input} /> 
            </header>
        </>
    )   
}