import React, { useCallback, useState } from 'react'

import WorkspaceListContext, { Workspace } from '../../context/WorkspaceListContext'
import { Container } from './styles'

// const WorkspaceList: React.FC = () => {
//   return (
//     <Container>
//       <WorkspaceButton selected />
//       <WorkspaceButton />
//       <WorkspaceButton />
//       <WorkspaceButton />
//     </Container>
//   )
// }

const WorkspaceList: React.FC = ({ children }) => {
  const [workspaces, setWorkspaces] = useState<Workspace[]>([])
  
  const registerWorkspace = useCallback((ws: Workspace) => {
    setWorkspaces((state: Workspace[]) => ([...state, ws]))
  }, [])

  const selectWorkspace = useCallback((name) => {
    workspaces.forEach((el: Workspace) => {
      if (name === el.name) {
        el.ref.classList.add('active')
      } else {
        el.ref.classList.remove('active')
      }
    })
  }, [workspaces])
  
  return (
    <Container>
      <WorkspaceListContext.Provider value={{ registerWorkspace, selectWorkspace }}>
        {children}
      </WorkspaceListContext.Provider>
    </Container>
  )
}

export default WorkspaceList
