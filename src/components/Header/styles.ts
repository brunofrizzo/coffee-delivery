import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a.locale {
            cursor: inherit;
            text-decoration: none;

            color: ${(props) => props.theme['purple-dark']};
            background: ${(props) => props.theme['purple-light']};

            span {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        a {
            padding: 0.25rem 0.5rem;

            color: ${(props) => props.theme['yellow-dark']};
            background: ${(props) => props.theme['yellow-light']};

            border-top: 3px solid transparent;
            border-bottom: 3px solid transparent;
            border-radius: 0.5rem;
        }

        a.cart:hover {
            border-bottom: 3px solid ${(props) => props.theme['yellow']};
        }
        a.cart span {
            position: absolute;
            color: #fff;
            background: ${props => props.theme['yellow-dark']};
            border-radius: 50%;
            padding: 0 5px 0 5px;
        }
    }
`