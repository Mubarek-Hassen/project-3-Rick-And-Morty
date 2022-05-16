// import { Link } from 'react-router-dom'
import React,{ useState, useEffect} from 'react'
import {useParams} from 'react-router'



const Character = ()=>{
    const params = useParams()
    const beingsId = params.id
    // console.log(beingsId)
    const URL = `https://rickandmortyapi.com/api/character/${beingsId}`
    const [beings, setBeings] = useState(null)
    const beingPage = async ()=>{
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data)
        setBeings(data)
    }
    useEffect(()=>{
        beingPage()
    }, [])

    return (
        <section>
            {/* {beings.map} */}
        <div>
            <h3>This is a show page</h3>
        </div>
        </section>
    )
}

export default Character