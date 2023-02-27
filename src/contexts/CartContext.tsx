import { createContext, ReactNode, useEffect, useState } from "react";
import { CartItemInterface } from "../pages/Home";

interface CartContextType {
    cartItems: CartItemInterface[];
    updateCart: (item: CartItemInterface, action: 'update' | 'insert') => void;
    deleteItemFromCart: (itemId: number) => void;
    cartItemsCount: number;
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);
    const [cartItemsCount, setCartItemsCount] = useState(cartItems.length);

    useEffect(() => {
        setCartItemsCount(cartItems.length)
    }, [cartItems]);

    function updateCart(item: CartItemInterface, action: 'update' | 'insert') {
        let itemAlreadyInCart = cartItems.some((cartItem) => {
            return cartItem.id === item.id;
        });

        if (itemAlreadyInCart) {
            const newChartList = cartItems.map((cartItem) => {
                if (cartItem.id === item.id)
                    cartItem.quantity = action === 'update' ? item.quantity : cartItem.quantity + item.quantity;

                return cartItem;
            });

            setCartItems(newChartList);
        } else {
            setCartItems([...cartItems, item]);
        }
    }

    function deleteItemFromCart(itemId: number) {
        const itemsWithoutDeletedOne = cartItems.filter((cartItem) => {
            return cartItem.id !== itemId
        });

        setCartItems(itemsWithoutDeletedOne);
    }

    return (
        <CartContext.Provider value={{ 
            cartItems,
            updateCart,
            deleteItemFromCart,
            cartItemsCount
        }}>
            {children}
        </CartContext.Provider>
    );
}