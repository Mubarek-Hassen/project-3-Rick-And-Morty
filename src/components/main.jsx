import React, { useState, useEffect } from "react";
// import { Router } from "react-router";
// import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import '../styles/main.css'


const Main = (props)=>{
    const params = useParams()

    const [page,setPage] = useState(1)

    const [cards, setCards] = useState([])

    const [URL, setUrl ]= useState(`https://rickandmortyapi.com/api/character`)
    const location = useNavigate()
    // console.log(location)

    const getCards = async ()=>{
        try {
            const data = await fetch(URL)
            const res = await data.json()
            setCards(res.results)
            setPage(page + 1)
            setUrl(res.info.next)

            {page === 42 ? setPage(1) : setUrl(res.info.next)}
            {page === 42 ? setUrl(`https://rickandmortyapi.com/api/character`) : setUrl(res.info.next)}
            // console.log(page)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getCards()
    },[])

    return(
        <div className="container border border-success">
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
                    <h4 className=" ">{card.name}</h4>
                    <img src={card.image} alt={card.name} className="border border-warning" />
                    </Link> 
                    </div>                   
                </div>
            </section>
        )
            })}
            
            </section>
            <div className="m-2">


            <button type="button" className="btn btn-warning m-1" onClick={()=>{location(-1)}}>Prev Page</button>


            <Link to={`?page=${page}`}><button type="button" className="btn btn-warning m-1"onClick={getCards}>Next Page</button></Link>


            </div>
            <hr />
    <footer>
        <Footer />
    </footer>
        </div>)
}
export default Main


