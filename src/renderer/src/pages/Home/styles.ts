import styled from 'styled-components'

export const HomeContainer = styled.main`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    color: ${(props) => props.theme['gray-100']};
    font: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
    
`
const baseInput = styled.input`
  background: transparent;
  border: none;
  height: 2.5rem;
  border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
  color: ${(props) => props.theme["gray-100"]};
  text-align: center;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`

export const TaskInput = styled(baseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(baseInput)`
  width: 4rem;
`

export const CountdownContainer = styled.div`
  user-select: none;
  display: flex;
  gap: 1.6rem;
  font-family: "Roboto Mono", monospace;
  font-size: 15rem;
  color: ${(props) => props.theme["gray-100"]};

  span {
    background: ${(props) => props.theme["gray-700"]};
    padding: 0rem 1.5rem;
    border-radius: 8px;
    text-shadow: 3px 3px 8px ${(props) => props.theme.black};
    box-shadow: 2px 2px 15px ${(props) => props.theme.black};
  }
`

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const BaseCountDownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    color: ${(props) => props.theme['gray-100']};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    font-weight: bold;

    cursor: pointer;

`

export const StartCountDownButton = styled(BaseCountDownButton)`

background-color: ${(props) => props.theme['green-500']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${(props) => props.theme['green-700']};
    }
`

export const StopCountDownButton = styled(BaseCountDownButton)`

background-color: ${(props) => props.theme['red-500']};

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${(props) => props.theme['red-700']};
    }
`