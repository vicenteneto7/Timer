import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CycleContext } from "~/src/renderer/src/contexts/CyclesContext";


type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function CycleForm() {
    const { activeCycle } = useContext(CycleContext)
    const { register } = useFormContext()


    return (
        <FormContainer>
            <label htmlFor="">Vou trabalhar em</label>
            <TaskInput
                list="task-suggestions"
                placeholder="Informe a tarefa"
                id="task"
                {...register('task')}
                disabled={!!activeCycle}
            />

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
                min={0}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}