import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react';

import imgLogo from '../../assets/Logo.png'
import { NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/" title="Home">
                <img src={imgLogo} alt="Logo Coffee Delivery" />
            </NavLink>
            <nav>
                <NavLink to="/locale" title="Localização">
                    <MapPin size={24} />
                </NavLink>
                <NavLink to="/checkout" title="Carrinho">
                    <ShoppingCart size={24} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}