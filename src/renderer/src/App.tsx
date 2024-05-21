import { ThemeProvider } from 'styled-components'
import { Routes } from './routes/routes'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globalStyles'
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CyclesContextProvider>
        <Routes />
      </CyclesContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
