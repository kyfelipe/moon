import styled from 'styled-components'

export const Container = styled.div`
  grid-area: WR;
  
  display: flex;
  flex-direction: column;
  
  background-color: ${props => props.theme.backgrounds.darker};
  padding: 10px 20px;
  
  max-height: 100vh;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }
  
  // Firefox
  scrollbar-width: none;
`

export const ListResources = styled.ul`
  list-style: none;
`

export const Resource = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;

  transition: background-color .2s;

  &:hover {
    background-color: ${props => props.theme.backgrounds.dark};
  }
`

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;

  color: ${props => props.theme.colors.white};
`

export const Name = styled.span`
  color: ${props => props.theme.colors.white};
  user-select: none;
`
