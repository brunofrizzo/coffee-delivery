import { CoffeeCardContainer } from "./styles";
import { ShoppingCart , Minus, Plus } from 'phosphor-react';

import express from '../../../../assets/expresso.png';
import { AddCoffeeToCartButton } from "../../styles";

import { CartItemInterface } from "../..";
import { useState } from "react";

interface CoffeeCardProps {
    id: number;
    type: string;
    description: string;
    category: string;
    price: number;
    updateCart: (item: CartItemInterface, action: 'update' | 'insert') => void;
}

export function CoffeeCard(props: CoffeeCardProps) {

    const [quantity, setQuantity] = useState(1);

    function handleClickMinusButton() {
        if(quantity > 1) 
            setQuantity(quantity => quantity -= 1)
    }

    function handleClickPlusButton() {
        setQuantity(quantity => quantity += 1)
    }

    return (
        <CoffeeCardContainer>
            <img src={express} alt="Cafe"/>
            <span className="coffeeCategory">{props.category}</span>
            <span className="coffeeType">{props.type}</span>
            <span className="coffeeDescription">{props.description}</span>
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
                <AddCoffeeToCartButton onClick={
                    () => props.updateCart({
                        id: props.id,
                        quantity: quantity,
                        price: props.price,
                        type: props.type
                    }, 'insert')
                }>
                    <ShoppingCart size={24} weight="fill"/>
                </AddCoffeeToCartButton>
            </div>
        </CoffeeCardContainer>
    )
}