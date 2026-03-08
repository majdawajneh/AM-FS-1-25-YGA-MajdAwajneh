"use client";
import { useCart } from "../CartContext";

export default function AddToCartButton({product}){
    const {addToCart} = useCart();
    return(
        <button onClick={() => addToCart(product)}>
            Add Item To Products
        </button>
        
    )
}