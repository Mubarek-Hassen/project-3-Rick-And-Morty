import { Link } from 'react-router-dom'

const Header = ()=>{
    return (
        <section>
        <h1>RICK AND MORTY</h1>
        <img src="https://vish213-rick-and-morty.netlify.app/static/media/logo.eab63707.png" alt="" />
            <nav>
                <Link to={'/'}>Home </Link>
                <Link to={'/'}>About </Link>
                <Link to={'/'}>More </Link>

            </nav>
            </section>
    )
}

export default Header