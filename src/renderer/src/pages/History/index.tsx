import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./styles";
import { CycleContext } from "../../contexts/CyclesContext";

export function History() {
  const { cycles } = useContext(CycleContext)

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>2meses</td>
              <td>
                <Status statusColor="yellow">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>2meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>2meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20min</td>
              <td>2meses</td>
              <td>
                <Status>Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
