import { Link } from 'react-router-dom'
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
            <img src={beings.image} alt={beings.name} className='border border-warning border-3'/>
            <h3>Status: {beings.status}</h3>
            <h3>Species: {beings.species}</h3>
            <h3>Gender: {beings.gender}</h3>
            <h3>Origin: {origin}</h3>
            <h3>{beings.type ? `Type: ${beings.type}`: 'No Type'}</h3>
           { beings.name== "Rick Sanchez" ? <img src='https://64.media.tumblr.com/136bcfb312f8c687c1cd013575690a7f/031605e905c4188a-f7/s540x810/4a0fd55e61f07edf9078d550c2b38df42e914d73.gifv' /> : <br/>}

           { beings.name== "Morty Smith" ? <img className=" img-fluid " src='https://thumbs.gfycat.com/EnviousUnrulyHake-max-1mb.gif'/> : <br/>}


        </div>
        <hr />
        <Link to={`/character`}><button className='btn btn-warning '>Back To The Universe</button></Link>
        <hr />
        <div>
            <Footer/>
        </div>
        </section>
    )
}

export default Character