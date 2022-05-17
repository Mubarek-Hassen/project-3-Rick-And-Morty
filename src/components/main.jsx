import React, { useState, useEffect } from "react";
// import { Router } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import '../styles/main.css'


const Main = (props)=>{

    const [page,setPage] = useState(1)
    const [prev, setPrev] = useState(42)

    const [cards, setCards] = useState([])

    const [URL, setUrl ]= useState(`https://rickandmortyapi.com/api/character`)

    const getCards = async ()=>{
        try {
            const data = await fetch(URL)
            const res = await data.json()
            setCards(res.results)
            setPage(page + 1)
            setUrl(res.info.next)

            {page === 42 ? setPage(1) : setUrl(res.info.next)}
            {page === 42 ? setUrl(`https://rickandmortyapi.com/api/character`) : setUrl(res.info.next)}
            // {page === 1 ? setPrev(1) : setPrev(page - 1)}

            console.log(page)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCards()
    },[])

    return(
        <>
    <header>
        <Header />
    </header>
            <section className="">
                {cards.map((card, idx)=>{
                const id = card.url.split('character/').slice(1)
        return(
            <section key={idx} className='container'>
                <div className="row" >
                <div className="col">
                    <div className="">
                    <Link to={`/${id}`} className='link'>
                    <h2>{card.name}</h2>
                    <img src={card.image} alt={card.name} className="" />
                    </Link> 
                    </div>                   
                </div>
                </div>
            </section>
        )
            })}
            {/* <button>Previous Page - {prev}</button> */}
            <button type="button" className="btn btn-warning"onClick={getCards}>Next Page - {page}</button>
            </section>
            <hr />
    <footer>
        <Footer />
    </footer>
        </>)
}
export default Main