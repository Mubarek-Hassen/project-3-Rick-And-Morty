import React, { useState, useEffect } from "react";

// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
const Main = ()=>{
    const [cards, setCards] = useState([])
    const URL = 'https://rickandmortyapi.com/api/character'

    const getCards = async ()=>{
        try {
            const data = await fetch(URL)
            const res = await data.json()
            setCards(res.results)
            console.log(res)
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
                    return(
            <section key={idx}>
                <main>
            
                <div className="card-holder">
                    <div className="cards">
                    <Link to={URL+'/'+card.id}>
                    <h3>{card.name}</h3>
                    <img src={card.image} alt="card.name" />
                    </Link> 
                    </div>                   
                </div>
                </main>
            </section>
                    )
            })}
            </section>
    <footer>
        <Footer />
    </footer>
        </>)
}
export default Main