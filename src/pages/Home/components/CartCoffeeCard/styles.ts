import styled from "styled-components";
import { BaseCartButton } from "../../styles";

export const DeleteItemFromCartButton = styled(BaseCartButton)`
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};

    &:hover {
        background: ${(props) => props.theme['yellow-dark']};
    }
`

export const CartCoffeeCardContainer = styled.div`
    background: ${props => props.theme["base-card"]};
    color: ${props => props.theme["base-text"]};
    width: '100%';
    height: '100%';

    margin: 1rem 1rem 0 0;
    padding: 1rem 1.5rem;
    border-radius: 1rem 3rem 1rem 3rem;

    display: flex;
    flex-direction: 'row';
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .coffeeType {
        font-family: 'Baloo 2', coursive;
        font-size: 1.25rem;
    }

    .coffeeDescription {
        font-size: 0.875rem;
        text-align: center;
    }

    .coffeePrice {
        font-size: 1rem;
        font-weight: 500;
    }

    .coffeePrice > span {
        font-family: 'Baloo 2', coursive;
        font-size: 1.5rem;
        font-weight: 800;
        margin-left: 0.25rem;
    }

    .quantityToAddedToChart {
        background: ${props => props.theme["base-button"]};
        padding: 0.5rem 0.5rem;
        border-radius: 0.5rem;

        width: 35%;

        svg {
            cursor: pointer;
        }
    }
`