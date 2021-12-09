import { Link } from "react-router-dom";
import style from './style.module.scss';

const NavBar = () => {
    return (
        <nav className={style.nav}>
            <Link to='/'>
                <img src='logo.png' alt="logo"/>
            </Link>
            <ul>
                <li>
                    <Link to='/gerente'>Gerente</Link>
                </li>
                <li>
                    <Link to='/medico'>Médico</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;