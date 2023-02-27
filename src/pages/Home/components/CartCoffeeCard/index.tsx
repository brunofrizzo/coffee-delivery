import { CartCoffeeCardContainer, DeleteItemFromCartButton } from "./styles";
import { Minus, Plus } from 'phosphor-react';

import express from '../../../../assets/expresso.png';

import { CartItemInterface } from "../..";
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";

interface CartCoffeeCardProps {
    id: number;
    type: string;
    price: number;
    quantity: number;
}

export function CartCoffeeCard(props: CartCoffeeCardProps) {

    const [quantity, setQuantity] = useState(props.quantity);
    const { updateCart, deleteItemFromCart } = useContext(CartContext);

    function incrementDecrementQuantity(action: 'increment' | 'decrement') {
        const newQuantityValue = action === 'increment' ? quantity + 1 : quantity - 1;

        if (newQuantityValue > 0) {
            setQuantity(newQuantityValue);

            updateCart({
                id: props.id,
                price: props.price,
                type: props.type,
                quantity: newQuantityValue
            }, 'update')
        }
    }

    function handleClickMinusButton() {
        incrementDecrementQuantity('decrement');
    }

    function handleClickPlusButton() {
        incrementDecrementQuantity('increment');
    }

    return (
        <CartCoffeeCardContainer>
            <img src={express} alt="Cafe" />
            <span className="coffeeType">{props.type}</span>
            <div>
                <span className="coffeePrice">
                    R$
                    <span>{props.price}</span>
                </span>
                <div className="quantityToAddedToChart">
                    <Minus onClick={handleClickMinusButton} />
                    {quantity}
                    <Plus onClick={handleClickPlusButton} />
                </div>
                <DeleteItemFromCartButton onClick={() => deleteItemFromCart(props.id)}>
                    Remover
                </DeleteItemFromCartButton>
            </div>
        </CartCoffeeCardContainer>
    )
}