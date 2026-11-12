import {useEffect, useState} from "react";
import axios from "axios";
import  ProductCard from "./ProductCard";
import styles from './ProductList.module.css'
import SearchBar from "./SearchBar";

function ProductList(){
    const [products, setProducts] = useState([]);
    //Estado que almacena el texto del buscador 
    const [search, setSearch] = useState("");

    useEffect(()=>{
      axios.get("https://dummyjson.com/products")
        .then(response => setProducts(response.data.products))
        .catch(error => {console.error(error);})  
    }, []);

    //Filtrar los productos según el texto del buscador
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(search.toLowerCase())
    )

    return(
        <div>
            <SearchBar 
               search={search}
               setSearch={setSearch}
            />
            <p>
                {filteredProducts.length} products found
            </p>
            <div className={styles.container}>
           
            {filteredProducts.map(product =>(
                <ProductCard 
                    key ={product.id}
                    product={product}
                />
            ))}
            </div>
        </div>
        
    )
}
export default ProductList;