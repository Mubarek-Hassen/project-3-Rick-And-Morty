import { Link } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import '../styles/search.css'
import { useState, useEffect } from "react"

const Search = () => {

    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [URL, setUrl] = useState(`https://rickandmortyapi.com/api/character?name=${query}`)

    async function handleSubmit(e) {
        e.preventDefault()

        console.log(query)

        try {
            const response = await fetch(URL)
            const data = await response.json()
            setResults(data.results)
        } catch(err) {
            console.log(err)
        }
    }



    return(
    <>
    <header>
        <Header/>
    </header>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setQuery(e.target.value)} value={query}/>
        <br />
        <button type="submit" onClick={(e)=>setUrl(`https://rickandmortyapi.com/api/character?name=${query}`)}>Submit</button>
    </form>

    {results.map((one, i)=>{
        return(
            <section key={i}>
                <Link to={`/character/${one.id}`}><h2>{one.name}</h2>
                <img src={one.image} alt={one.name} /></Link>


            </section>
        )

    })}
    <hr />

    <footer className="footer">
        <Footer/>
    </footer>

    </>
    )
}

export default Search