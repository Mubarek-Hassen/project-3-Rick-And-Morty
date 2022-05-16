import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = ()=>{
    return (
        <section>
        <img src="https://vish213-rick-and-morty.netlify.app/static/media/logo.eab63707.png" alt="Rick And Morty" className='header-img' />
            <nav>
                <Link to={'/'}>Home </Link>
                <Link to={'/'}>About </Link>
                <Link to={'/'}>More </Link>
            </nav>
            </section>
    )
}

export default Header