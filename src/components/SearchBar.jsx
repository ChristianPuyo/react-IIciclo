import styles from './SearchBar.module.css'

function SearchBar({search, setSearch}) {
    return(
        <input 
            type="text"
            placeholder = "Search products..."
            value= {search}
            onChange = {(e) => setSearch(e.target.value)}
            className={styles.input}
        />
    )
}

export default SearchBar