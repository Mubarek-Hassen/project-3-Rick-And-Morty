import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = ()=>{
    return (
        <section className='hed'>
        <img src="https://vish213-rick-and-morty.netlify.app/static/media/logo.eab63707.png" alt="Rick And Morty" className='header-img' />
            <nav>
                <Link to={'/'} className='hed'>Home </Link>
                <Link to={'/'}className='hed'>About </Link>
                <Link to={'/'}className='hed'>More </Link>
            </nav>
            </section>
    )
}

export default Header