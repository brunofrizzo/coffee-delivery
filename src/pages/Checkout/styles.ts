import styled from "styled-components";
import { BaseCartButton } from "../Home/styles";

export const ConfirmOrderButton = styled(BaseCartButton)`
    background: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};

    width: 100%;

    &:hover {
        background: ${(props) => props.theme['yellow-dark']};
    }
`

export const CheckoutContainer = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: 1rem 0;
    margin: 0;

    div.checkoutColumnDiv {
        width: 100%;
        height: 100%;

        padding-right: 1rem;
        border-radius: 2px;

        h2 {
            font-family: 'Baloo 2', coursive;
        }
    }

    .selectedCoffees {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        padding: 1.5rem;
        border-radius: 1rem 3rem 1rem 3rem;
        background-color: ${props => props.theme['base-card']};

        .totals {
            width: 100%;
            border-top: 1px solid gray;
            padding: 1rem 0;
        }

        .totals > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            padding: 0.5rem;
        }

        .cards {
            width: 100%;
        }

        h3 {
            text-align: center;
            padding: 1rem;
        }
    }
`