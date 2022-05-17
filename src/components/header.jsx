import { Link } from 'react-router-dom'
import '../styles/header.css'

const Header = ()=>{
    return (
        <>
        <section className='navbar navbar-dark'>
        <img src="https://vish213-rick-and-morty.netlify.app/static/media/logo.eab63707.png" alt="Rick And Morty"  className="d-inline-block align-text-top"  id='headImg'/>
            <nav>
                <Link to={'/'} className='navbar-brand'>Home </Link>
                <Link to={'/'}className='navbar-brand'>About </Link>
                <Link to={'/'}className='navbar-brand'>More </Link>
            </nav>
            </section>
            <hr />
            </>
    )
}

export default Header