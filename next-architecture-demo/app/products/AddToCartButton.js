"use client";
import { useCart } from "../CartContext";

export default function AddToCartButton({product}){
    const {addItem} = useCart();
    return(
        <button onClick={() => addItem(product)}>
            Add Item To Products
        </button>
    )
}