// import { Link } from 'react-router-dom'
import React,{ useState, useEffect} from 'react'
import {useParams} from 'react-router'
import Header from './header'
import Footer from './footer'


const Character = ()=>{
    const params = useParams()
    const beingsId = params.id
    // console.log(beingsId)
    const URL = `https://rickandmortyapi.com/api/character/${beingsId}`
    const [beings, setBeings] = useState('')
    const beingPage = async ()=>{
        const res = await fetch(URL)
        const data = await res.json()
        console.log(data)
        setBeings(data)
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
            <h3>{beings.name}</h3>
            <img src={beings.image} alt={beings.name}/>
        </div>
        <div>
            <Footer/>
        </div>
        </section>
    )
}

export default Character