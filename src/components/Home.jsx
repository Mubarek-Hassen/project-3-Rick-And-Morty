import Footer from "./footer"
import Header from "./header"
import { Link } from "react-router-dom"
import '../styles/home.css'


const Home = ()=>{
    return(
        <>
        <header>
            <Header/>
        </header>
        <section>
        <h1>HOME</h1>
        <div className="Content">
            <p className=" md "> <span id="me">I AM</span> Mubarek Hassen, big time Rick and Morty fan. Therefore, By using <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">The Rick and Morty API</a>, built by Axel Fuhrmann, i built this web app for project and put effort to see how much i have learned within the given time. i am not proud enough, but it is an honest work so i accept it. Enjoy!</p> <br/>
            <h4>Tap Rick To See More Characters</h4><br/> <h3>AND AWWWWWAAAAAAAAYYYY WE GO!!!</h3>
            </div>
        </section>
        <div className=""><Link to={'/character'}> <img src="https://pngimg.com/uploads/rick_morty/rick_morty_PNG4.png" alt="Rick pointing" /></Link>
        <img className="figure-img img-fluid rounded" src="https://ca.slack-edge.com/T0351JZQ0-U035S4AKVRQ-a5e0cf4924a7-512" alt="This Is Me" /></div>
        
        <footer> 
            <Footer/> 
        </footer>
        </>
    )
}
export default Home