import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import '../style/_logo.scss';

export const Header = () => {
    

    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(!open);
      }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                <img src={`../assets/img/logo.png`} width="100" height="60" className="logo align-text-top" />
                            </a>
                            <button onClick={handleClick} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={open} aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={`collapse navbar-collapse end ${open ? 'show' : ''}`} id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active ms-4" aria-current="page" to={"/android"}>Qué es android</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active ms-4" to="#">android 13</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active ms-4" to="#">Teléfonos y tablets</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active ms-4" to="#" tabIndex="-1" aria-disabled="true">Empresa</Link>
                                    </li>
                                    <li className="nav-item">
                                        <div className='mt-1 ms-4'> <FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>

            </div>
        </div>
    )
}
export default Header