"use client";
import {useCart} from './CartContext';

export default function CartSummary(){
    
    const {Items, clear} = useCart();

    const totalQuantity = Items.reduce((sum,x) => sum + x.qty, 0);
    const totalPrice = Items.reduce((sum,x) => sum + x.Price * x.qty, 0);

    return(
        <div style={{padding: 12, border: "1px solid #ddd", borderRadius: 8}}>
            <h3 style={{margin: 0}}>Cart</h3>
            <p style={{margin: "8px 0"}}>TotalItem : {totalQuantity}</p>
            <p style={{margin: "8px 0"}}>TotalPrice: ${totalPrice}</p>

            <button onClick={clear}>Clear Cart</button>
        </div>
    );
}