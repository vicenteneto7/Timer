import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
          list="task-suggestions"
            placeholder="Informe a tarefa"
            id="task" />

            <datalist id="task-suggestions">
              <option value="Projeto 1" />
              <option value="Projeto 2" />
              <option value="Projeto 3" />
              <option value="Projeto 4" />
            </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput 
          type="number" 
          id="minutesAmount" 
          step={5}
          min={5}
          max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountDownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
