import AddToCartButton from "./addToCartButton";

export default function ProductCard({product}){

    return(
        <div style={{border: "1px solid #ddd", borderRadius: 10, padding: 12, display: "grid", gap: 8}}>
            <strong>{product.name}</strong>
            <strong>Price: {product.price}</strong>

            <AddToCartButton product={product}/>
        </div>
    );
}