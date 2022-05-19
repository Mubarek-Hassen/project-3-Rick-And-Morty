import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";
import '../styles/main.css'

const Main = ()=>{

    const [offset, setOffset] = useState(0)

    const [page,setPage] = useState(1)

    const [cards, setCards] = useState([])

    const [URL, setUrl ]= useState(`https://rickandmortyapi.com/api/character`)

    const getCards = async ()=>{
        try {
            const data = await fetch(URL)
            const res = await data.json()
            setCards(res.results)
            setPage(page + 1)
            setUrl(res.info.next)
            setOffset(offset + 20)
            {page === 42 ? setPage(1) : setUrl(res.info.next)}
            {page === 42 ? setUrl(`https://rickandmortyapi.com/api/character`) : setUrl(res.info.next)}
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCards()
    },[])

    return(
        <div className="container ">
        <header>
            <Header />
        </header>
            <section className="row">
                <h2>Choose A Character</h2>

                {cards.map((card, idx)=>{
                const id = card.url.split('character/').slice(1)
        return(
            <section key={idx} className='col-sm'>
                <div className="" >
                    <div className=" mt-0 mb-5">
                    <Link to={`/character/${id}`} className='link'>
                    <img src={card.image} alt={card.name} className="border border-warning" />
                    <h4 className=" ">{card.name}</h4>
                    </Link> 
                    </div>                   
                </div>
            </section>
        )
            })}
            
            </section>
            <div className="m-2">
                <button type="button" className="btn btn-warning m-1" onClick={getCards}>See More on Page-{page}</button>
            </div>
            <hr />
    <footer>
        <Footer />
    </footer>
        </div>)
}
export default Main


