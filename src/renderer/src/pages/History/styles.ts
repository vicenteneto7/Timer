import styled from 'styled-components'

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 3.5rem;
    
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['gray-100']};
    }
`
export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 400px;
        th {
      background: ${(props) => props.theme["gray-600"]};
      padding: 1.2rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 10px;
        padding-left: 2.5rem;
      }

      &:last-child {
        border-top-right-radius: 10px;
        padding-right: 2.5rem;
      }
    }
    td {
      background: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1.2rem;
      line-height: 1.4;

      &:first-child {
        width: 40%;
        padding-left: 2.5rem;
      }

      &:last-child {
        padding-right: 2.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
    red: "red-500",
    yellow: "yellow-500",
    green: "green-500",
  } as const;
  
  interface StatusProps {
    statusColor: keyof typeof STATUS_COLORS;
  }

  export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;