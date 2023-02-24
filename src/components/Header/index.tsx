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
                <NavLink className="locale" to="/locale" title="Localização">
                    <span>
                        <MapPin size={24} />
                        Santa Maria - RS
                    </span>
                </NavLink>
                <NavLink to="/checkout" title="Carrinho">
                    <ShoppingCart size={24} weight="fill"/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}