import { useState, useEffect } from "react"
import Main from "./main"




const Next = (props)=>{
    const [nextP,setNextp] = useState('')
    const URL = {props}
    const getPage = async ()=>{
        try {
            const res = await fetch(URL)
            const data = await res.json()
            setNextp(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getPage()
    })

}




export default Next