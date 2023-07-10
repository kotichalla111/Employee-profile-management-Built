import style from "./homecrud.module.css"
import React from "react"
import {Link} from "react-router-dom"
const Homecrud=()=>{
    return(
        <section id={style.nav}>
            <Link to="/createusers">CREATE-USERS</Link>
            <Link to="/users">USERS</Link>
        </section>
    )
}

export default Homecrud