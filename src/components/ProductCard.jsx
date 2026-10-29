import styles from './ProductCard.module.css'

function ProductCard({product}){
    return(
        <article cc>
            <img 
               src={product.thumbnail}
                alt={product.title}
                className={styles.image}
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h3>${product.price}</h3>
        </article>
    )
}
export default ProductCard;