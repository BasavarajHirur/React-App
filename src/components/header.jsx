import { useState } from "react";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <header className="header">
            <div className="logo">ShopEasy</div>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#" className="cart">
                    🛒 Cart
                </a>
                <a href="#" onClick={() => { isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true) }}>{!isLoggedIn ? 'Login' : 'logOut'}</a>
            </nav>
        </header>
    );
}

export default Header;
