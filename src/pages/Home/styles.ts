import styled from "styled-components";

export const HomeContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
    margin: 0;

    h1, h2 {
        font-family: 'Baloo 2', cursive;
    }

    .coffeeDiv {
        display: flex;
        //justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
    }
`

export const BaseCartButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const AddCoffeeToCartButton = styled(BaseCartButton)`
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['white']};

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
`

export const OpenCartButton = styled(BaseCartButton)`
  background: ${(props) => props.theme['base-text']};

  &:not(:disable):hover {
    background: ${(props) => props.theme['base-text']};
  }
`