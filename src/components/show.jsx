// import { Link } from 'react-router-dom'
import React,{ useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Header from './header'
import Footer from './footer'


const Character = ()=>{
    const params = useParams()
    const beingsId = params.id
    const URL = `https://rickandmortyapi.com/api/character/${beingsId}`
    const [beings, setBeings] = useState([])
    const [origin,setOrigin] = useState('')
    const beingPage = async ()=>{
        const res = await fetch(URL)
        const data = await res.json()
        setBeings(data)
        setOrigin(data.origin.name)
    }
    useEffect(()=>{
        beingPage()
    },[])

    return (
        <section>
            <div>
                <Header/>
            </div>
        <div>
            <h2>{beings.name}</h2>
            <img src={beings.image} alt={beings.name}/>
            <h3>Status: {beings.status}</h3>
            <h3>Species: {beings.species}</h3>
            <h3>Gender: {beings.gender}</h3>
            <h3>Origin: {origin}</h3>
            <h3>{beings.type ? `Type: ${beings.type}`: 'No Type'}</h3>
        </div>
        <hr />
        <a href="/"><button>Back To The Universe</button></a>
        <hr />
        <div>
            <Footer/>
        </div>
        </section>
    )
}

export default Character