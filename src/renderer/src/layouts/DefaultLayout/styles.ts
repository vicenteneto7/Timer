import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 12rem);
  display: flex;
  flex-direction: column;
  margin: 6rem auto;
  padding: 3.5rem;
  border-radius: 10px;
  background: ${(props) => props.theme['gray-800']};
  box-shadow: 2px 2px 10px ${(props) => props.theme.black};
`