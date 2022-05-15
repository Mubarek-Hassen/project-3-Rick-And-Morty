import { Link } from 'react-router-dom'

const Header = ()=>{
    return (
        <section>
        <h1>RICK AND MORTY</h1>
            <nav>
                <Link to={'/'}>Home </Link>
                <Link to={'/'}>About </Link>
                <Link to={'/'}>More </Link>

            </nav>
            </section>
    )
}

export default Header