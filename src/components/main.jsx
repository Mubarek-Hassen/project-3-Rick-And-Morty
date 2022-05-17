import React, { useState, useEffect } from "react";
// import { Router } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import Next from "./next";


const Main = (props)=>{


    const [page,setPage] = useState(1)

    const [cards, setCards] = useState([])
    const URL = `https://rickandmortyapi.com/api/character?page=${page}`

    const getCards = async ()=>{
        try {
            const data = await fetch(URL)
            const res = await data.json()
            setCards(res.results)
            // setPage(page +1)
            setPage(res.info.next)
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
            <section>
                {cards.map((card, idx)=>{
                const id = card.url.split('character/').slice(1)
        return(
            <section key={idx}>
                <main>
                <div className="card-holder">
                    <div className="cards">
                    <Link to={`/${id}`}>
                    <h3>{card.name}</h3>
                    <img src={card.image} alt={card.name} />
                    </Link> 
                    </div>                   
                </div>
                </main>
            </section>
        )
            })}
            <button onClick={getCards}>Next</button>
            </section>
            <hr />
    <footer>
        <Footer />
    </footer>
        </>)
}
export default Main