import { useContext, useEffect, useState } from "react"

import { CartContext } from "../../contexts/CartContext"
import { CartCoffeeCard } from "../Home/components/CartCoffeeCard";

import { CheckoutContainer, ConfirmOrderButton } from "./styles"

export function Checkout() {
    const { cartItems } = useContext(CartContext);
    const [itemsTotal, setItemsTotal] = useState(
        cartItems.reduce((sum, item) => {
            return sum += item.price * item.quantity
        }, 0)
    );

    const [total, setTotal] = useState(itemsTotal + 10);

    useEffect(() => {
        const newItemsTotal = cartItems.reduce((sum, item) => {
            return sum += item.price * item.quantity
        }, 0);
        setItemsTotal(newItemsTotal)

        setTotal(newItemsTotal + 10);
    }, [cartItems])

    return (
        <CheckoutContainer>
            <div className="checkoutColumnDiv">
                <h2>Complete seu pedido</h2>
            </div>
            <div className="checkoutColumnDiv">
                <h2>cafes selecionados</h2>
                <div className="selectedCoffees">
                    <div className="cards">
                        {cartItems.length ? cartItems.map((item) => {
                            return (
                                <CartCoffeeCard
                                    key={item.id}
                                    type={item.type}
                                    id={item.id}
                                    price={item.price}
                                    quantity={item.quantity}
                                />
                            )
                        }) : (
                            <h3>Adicione itens ao carrinho</h3>
                        )}
                    </div>
                    <div className="totals">
                        <div>
                            <span>Total de itens</span>
                            <span>R${itemsTotal.toLocaleString('pt-BR')}</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>R$10,00</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>R${total.toLocaleString()}</span>
                        </div>
                    </div>
                    <ConfirmOrderButton>
                        Finalizar pedido
                    </ConfirmOrderButton>
                </div>
            </div>
        </CheckoutContainer>
    )
}