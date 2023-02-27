import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    background: ${props => props.theme["base-card"]};
    color: ${props => props.theme["base-text"]};
    width: 256px;
    height: 310px;

    margin: 1rem 1rem 0 0;
    padding: 1rem 1.5rem;
    border-radius: 1rem 3rem 1rem 3rem;

    display: flex;
    flex-direction: column;
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

    .coffeeCategory {
        padding: 0.2rem 1rem;
        background: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};
        border-radius: 2rem;
        font-size: 0.625rem;
        font-weight: 700;
        text-transform: uppercase;
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