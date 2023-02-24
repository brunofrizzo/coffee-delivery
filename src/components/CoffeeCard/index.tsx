import { CoffeeCardContainer } from "./styles";
import { ShoppingCart , Minus, Plus } from 'phosphor-react';

import express from '../../assets/expresso.png';
import { AddCoffeeToCartButton } from "../../pages/Home/styles";

export function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src={express} alt="Cafe"/>
            <span className="coffeeCategory">expresso</span>
            <span className="coffeeType">expresso tradicional</span>
            <span className="coffeeDescription">o tradicional cafe feito a base de agua com um pouco cafe</span>
            <div>
                <span className="coffeePrice">
                    R$
                    <span>9,90</span>
                </span>
                <div className="quantityToAddedToChart">
                    <Minus/>
                    1 
                    <Plus />
                </div>
                <AddCoffeeToCartButton>
                    <ShoppingCart size={24} weight="fill"/>
                </AddCoffeeToCartButton>
            </div>
        </CoffeeCardContainer>
    )
}