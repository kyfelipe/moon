import React from 'react'
import { render } from 'react-dom'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/theme'
import Header from './components/Header'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.backgrounds.darker};
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
      {/*<AppProvider>*/}
        <Container>
          <Header />
          <Content>
            <h1>Hello Moon!</h1>
            {/* <Sidebar />
            <Connection>
              <ConnectionDetails />
              <CodeView />
            </Connection> */}
          </Content>
        </Container>
      {/*</AppProvider>*/}
      <GlobalStyle />
    </ThemeProvider>
  )
}

render(<App />, mainElement)
