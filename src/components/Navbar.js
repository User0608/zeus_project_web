import { Link } from "react-router-dom"
export const Navbar = ({ exitModalOpen = () => { } }) => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
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
                        <button
                            className="btn btn-sm btn-danger"
                            onClick={exitModalOpen}
                        >cerrar</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
