import {
    Link
} from 'react-router-dom';
import CartWidget from './CartWidget';
function NavBar() {
    return(
        <ul>
            <Link to='/'>
                <li> Home </li>
            </Link>
            <Link to='campeones'>
                <li> Campeones </li>
            </Link>
            <Link to='runas'>
                <li> Runas </li>
            </Link>
        </ul>
    )
}

export default NavBar;