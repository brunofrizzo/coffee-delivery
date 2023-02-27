import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react';

import imgLogo from '../../assets/Logo.png'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {

    const { cartItemsCount } = useContext(CartContext);

    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={imgLogo} alt="Logo Coffee Delivery" />
            </NavLink>
            <nav>
                <NavLink className="locale" to="/locale" title="Localização">
                    <span>
                        <MapPin size={24} />
                        Santa Maria - RS
                    </span>
                </NavLink>
                <NavLink className="cart" to="/checkout" title="Carrinho">
                    <ShoppingCart size={24} weight="fill"/>
                    <span>{cartItemsCount}</span>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}