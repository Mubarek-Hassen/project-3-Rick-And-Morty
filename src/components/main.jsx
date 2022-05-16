import React, { useState, useEffect } from "react";

// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const Main = ()=>{
    const [cards, setCards] = useState([])
    const URL = 'https://rickandmortyapi.com/api/character'

    const getCards = async ()=>{
        try {
            const data = await fetch(URL)
            const res = await data.json()
            setCards(res)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCards()
    },[])

    return(
        <section>
            {cards.map((card, idx)=>{
                return(
                <section>
        <header>
            <Header />
        </header>



            <main>
                <div className="card-holder">
                    <div className="cards">
                    <h3>{card.results[idx].name}</h3>
                    </div>
                </div>
            </main>




        <footer>
            <Footer />
        </footer>
        </section>
                )
        })}
        </section>
        )
}
export default Main