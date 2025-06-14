import mainLogo from "../assets/main-logo.png"

function Navbar() {

    function showSidebar() {
        const sidebar = document.querySelector('.nav-ul-sidebar');
        sidebar.style.display = 'flex';
    }

    function closeSidebar() {
        const closeSidebar = document.querySelector('.nav-ul-sidebar')
        closeSidebar.style.display = 'none';
    }

    return (
        <>
            <nav>
                <div className="nav-p1">
                    <ul className="nav-ul-sidebar">
                        <li onClick={closeSidebar} className="nav-li"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></li>
                        <li className="nav-li"><a href="#">Home</a></li>
                        <li className="nav-li"><a href="#">About</a></li>
                        <li className="nav-li"><a href="#">Contact</a></li>
                    </ul>
                    
                    <img src={mainLogo} alt="main-logo" height="100px"/>
                    <ul className="nav-ul">
                        <li id="hide" className="nav-li"><a href="#">Home</a></li>
                        <li id="hide" className="nav-li"><a href="#">About</a></li>
                        <li id="hide" className="nav-li"><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-p2">
                    <a id="hide" href="#">Github</a>
                    <a id="hide" href="#">Login</a>
                    <a href="#" onClick={ showSidebar } ><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#e3e3e3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a>
                </div>
            </nav>
        </>
    )
}

export default Navbar