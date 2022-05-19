import { Link } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import '../styles/search.css'
import { useState } from "react"

const Search = () => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [URL, setUrl] = useState(`https://rickandmortyapi.com/api/character?name=${query}`)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            const response = await fetch(URL)
            const data = await response.json()
            // Handling 404 error, working on it!
            // if (data.status === 404){
            //     return (<p>No Result</p> )
            // } else {
                
            // }
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
        <input type="text" placeholder="search by name" onChange={(e)=>setQuery(e.target.value)} value={query}/>
        <br />
        <button className=' btn btn-warning m-2'type="submit" onClick={(e)=>setUrl(`https://rickandmortyapi.com/api/character?name=${query}`)}>Submit</button>
    </form>
    {results.map((one, i)=>{
        return(
            <section key={i} className="container">
                <div className="row">
                <div className="col-sm">
                <Link to={`/character/${one.id}`}><h2>{one.name}</h2>
                <img src={one.image} alt={one.name} /></Link>
                </div>
                </div>
            </section>
        )
    })}
    <hr />
    <footer className="footer text-center text-white  ">
        <Footer/>
    </footer>
    </>
    )
}

export default Search