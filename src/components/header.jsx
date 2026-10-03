const Header = () => {
    return (
        <header className="header">
            <div className="logo">ShopEasy</div>
            <div className="search">
                <input
                    type="text"
                    placeholder="Search products..."
                />
                <button>Search</button>
            </div>
            <nav className="nav">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Login</a>
                <a href="#" className="cart">
                    🛒 Cart
                </a>
            </nav>
        </header>
    );
}

export default Header;
