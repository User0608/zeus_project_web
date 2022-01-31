import { Link, useLocation } from "react-router-dom"
import { BACK_ARROW } from "../assets"
export const Navbar = ({ exitModalOpen = () => { } }) => {
    let location = useLocation()
    return (
        <>
            <nav className="navbar navbar-dark bg-dark mi-nav">
                <div className="container">
                    {location.pathname !== "/" &&
                        <div>
                            <Link
                                style={{}}
                                className="btn btn-sm btn-light"
                                to="/"
                            > <img width="20" src={BACK_ARROW} alt="<-" />
                                <span className="ms-2">Go Home</span>
                            </Link>
                        </div>
                    }
                    <Link to="/" className="navbar-brand d-flex justify-content-center align-items-center" href="#">
                        <img
                            src="/logo.png"
                            alt="logo"
                            width="30" height="24"
                            className="d-inline-block align-text-top"
                        />
                        <span className="ms-4">Zeus</span>
                    </Link>
                    <div >
                        {location.pathname === "/" &&
                            <button
                                className="btn btn-sm btn-danger"
                                onClick={exitModalOpen}
                            >Cerrar Session</button>
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}
