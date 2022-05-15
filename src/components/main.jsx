import React, { useState, useEffect } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
const Main = ()=>{
    const [cards, setCards] = useState(null)
    const URL = 'https://rickandmortyapi.com/api'

    const getCards = async ()=>{
        const data = await fetch(URL)
        const res = await data.json()
        setCards(res)
        console.log(res)
    }
    // useEffect(()=>{
    //     getCard()
    // })
    return(
        <section>
        <header>
            <Header />
        </header>



            <main>
                <div className="card-holder">
                    <div className="cards">
                    </div>
                </div>
            </main>




        <footer>
            <Footer />
        </footer>
        </section>
    )
}
export default Main