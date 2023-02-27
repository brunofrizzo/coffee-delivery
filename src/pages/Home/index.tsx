import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

import { CoffeeCard } from "./components/CoffeeCard";
import { HomeContainer } from "./styles";

const coffeeList = [
    { 
        id: 1,
        type: "Expresso tradicional",
        description: "O tradicional cafe feito com agua quente e graos moidos.",
        category: "tradicional",
        price: 9.9
    },
    {
        id: 2,
        type: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        category: "tradicional",
        price: 9.9
    },
    {
        id: 3,
        type: "Expresso cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        category: "tradicional",
        price: 9.9
    },
    {
        id: 4,
        type: "Expresso gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        category: "expresso",
        price: 9.9
    },
    {
        id: 5,
        type: "Cafe com leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        category: "com leite",
        price: 9.9
    },
    {
        id: 6,
        type: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        category: "com leite",
        price: 9.9
    },
    {
        id: 7,
        type: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        category: "com leite",
        price: 9.9
    },
];

export interface CartItemInterface {
    id: number;
    quantity: number;
    price: number;
    type: string;
}

export function Home() {

    const { updateCart } = useContext(CartContext);

    return (
        <HomeContainer>
            <h1>Nossos cafés</h1>
            <div className="coffeeDiv">
                { coffeeList.map((coffee) => {
                    return (
                        <CoffeeCard
                            key={coffee.id}
                            type={coffee.type}
                            category={coffee.category}
                            description={coffee.description}
                            id={coffee.id}
                            price={coffee.price}
                            updateCart={updateCart}
                        />
                    )
                }) }
            </div>
        </HomeContainer>
    )
}