"use client";
// عشان يجيبلنا كل مكتبات الرياضيات MEMOاستخدمنا ال
import { createContext, useContext, useMemo, useState} from "react";

const CartContext = createContext(null); //اعطيناه Null هون عشان يقبل اذا كان في اشي Null

export function CartProvider({children}){
    const [Items , setItems] = useState([]);

    function addToCart(product){
        
        setItems((prev) => {
            const found = prev.find((x) => x.id === product.id);
            
            if(found){
                return prev.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x);
            }
            return [...prev, {...product, qty: 1}];
        });
    }

    function clear(){
        setItems([])
    }

    const value = useMemo(() => {Items, addToCart, clear}, [Items]);
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart(){
    const ctx = useContext(CartContext);
    if(!ctx)throw new Error("useCart must be used within a cartProvider");
    return ctx;
}