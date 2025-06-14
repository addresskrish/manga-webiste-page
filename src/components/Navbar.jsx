function Navbar() {
    return (
        <>
            <nav>
                <div className="nav-p1">
                    <img src="https://www.pngall.com/wp-content/uploads/13/Anime-Logo-PNG-HD-Image.png" alt="main-logo" height="100px"/>
                    <ul className="nav-ul">
                        <li className="nav-li">Home</li>
                        <li className="nav-li">About</li>
                        <li className="nav-li">Contact</li>
                    </ul>
                </div>
                <div className="nav-p2">
                    <button className="star">Github</button>
                    <button className="login">Login</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar