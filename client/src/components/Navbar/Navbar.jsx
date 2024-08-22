import React,{useState} from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery) {
            console.log(`Searching for: ${searchQuery}`);

        }
    };
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <ul className={styles.navlink}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/category">Category</a></li>
                <li><a href="/create-post">Create Post</a></li>
                <form className={styles.searchbar} onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>
            </ul>
        </nav>
    );
};

export default Navbar;
