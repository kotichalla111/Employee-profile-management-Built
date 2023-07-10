import { useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import {useNavigate } from "react-router-dom"

const CreateUsers=()=>{
    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [company,setCompany]=useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }

    let salaryData=(e)=>{
        setSalary(e.target.value)
    }

    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let navigate=useNavigate()

    let formHandle=()=>{
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("DATA HAS UPLOADED");
        })
        .catch(()=>{
            console.log("SOMTHING WENT WRONG");
        })
        navigate("/users")
    }

    return(
        <div id={style.myForm}>
            <article>
                <label htmlFor="">Name:</label>
                <input type="text" value={name} onChange={nameData}/><br />
                <label htmlFor="">Salary:</label>
                <input type="text" value={salary} onChange={salaryData}/><br />
                <label htmlFor="">Company:</label>
                <input type="text" value={company} onChange={companyData}/><br />
                <button onClick={formHandle}>Submit</button>
            </article>
        </div>
    )
}

export default CreateUsers