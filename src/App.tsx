import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'
import Header from './components/Header'
import Layout from './components/Layout'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.backgrounds.dark};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
`

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <Header />
        <Content>
          <Layout />
        </Content>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  )
}

render(<App />, mainElement)
