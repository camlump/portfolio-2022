import './index.scss'
import { Link,NavLink } from 'react-router-dom'
import LogoC from '../../images/camlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => ( 
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoC} alt='logo' />
        </Link>
        <nav>
            <NavLink exact="true" activeclassName='active' to ="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassName='active' className="about-link" to ="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassName='active'className='contact-link' to ="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

    </div>

    )


export default Sidebar