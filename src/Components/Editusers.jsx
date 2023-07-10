import { useEffect, useState } from "react"
import style from "./homecrud.module.css"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


const Editusers=()=>{
    let [name , setName] = useState("")
    let [salary , setSalary] = useState("")
    let [company , setCompany] = useState("")

    let {index}=useParams()
    console.log(index);

    let navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((response)=>{
            // console.log("Got the data");
            setName(response.data.name)
            setSalary(response.data.salary)
            setCompany(response.data.company)
        })
        .catch(()=>{
            console.log("Didnt get the data");
        })
    },[])


    let nameData=(e)=>{
        setName(e.target.value)
    }

    let salaryData=(e)=>{
        setSalary(e.target.value)
    }

    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=()=>{
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
            console.log("Data has been updated");
        })
        .catch(()=>{
            console.log("somting went wrong");
        })

        navigate("/users")
    }


    return(
        <div id={style.myForm}>
        <article>
            <h1>Update Users</h1>
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

export default Editusers