import { Link } from "react-router-dom"
import Header from "./header"
import { useState, useEffect } from "react"

const Search = () => {

    const [query, setQuery] = useState([])
    const [results, setResults] = useState([])
    const [URL, setUrl] = useState(`https://rickandmortyapi.com/api/character?name=Rick`)

    async function handleSubmit(e) {
        e.preventDefault()

        console.log(query)

        try {

            const response = await fetch(URL)
            const data = await response.json()
            setResults(data.results)
            console.log(results.results)
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
        <button type="submit">Submit</button>
    </form>

    {results.map((one, i)=>{
        return(
            <section key={i}>
                <Link to={`/character/${one.id}`}><h2>{one.name}</h2>
                <img src={one.image} alt="" /></Link>


            </section>
        )

    })}
    </>
    )
}

export default Search