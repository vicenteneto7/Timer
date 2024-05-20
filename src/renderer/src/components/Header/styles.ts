import styled from 'styled-components'

export const HeaderContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 
 nav {
    display: flex;
    gap: 1rem;

    a{
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        color: ${(props) => props.theme['gray-100']};

        border-top: 0.3rem solid transparent;
        border-bottom: 0.3rem solid transparent;
        
        &:hover {
            border-bottom: ${(props) => props.theme['gray-500']};
        }

        &:active {
            color: ${(props) => props.theme['green-500']};
        }

    }
 }
`