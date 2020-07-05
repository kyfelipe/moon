import React, { useContext, useRef, useEffect } from 'react'

import WorkspaceListContext from '../../context/WorkspaceListContext'
import { Button } from './styles'

export interface WorkspaceButtonProps {
  name: string;
  selected?: boolean;
  isHome?: boolean;
}

// const WorkspaceButton: React.FC<WorkspaceButtonProps> = ({ selected, isHome }) => {
//   const [isSelected, setIsSelected] = useState(selected)
//
//   const toggle = useCallback(() => {
//     setIsSelected(!isSelected)
//   }, [])
//  
//   return (
//     <Button
//       isHome={isHome}
//       className={isSelected ? 'active' : ''}
//       onClick={toggle}
//     />
//   )
// }

const WorkspaceButton: React.FC<WorkspaceButtonProps> = ({ name, selected, isHome }) => {
  const workspaceRef = useRef(null)
  const { registerWorkspace, selectWorkspace } = useContext(WorkspaceListContext)

  useEffect(() => {
    if (workspaceRef.current) {
      registerWorkspace({ name, ref: workspaceRef.current })
    }
  }, [name, registerWorkspace])

  return (
    <Button
      name={name}
      ref={workspaceRef}
      isHome={isHome}
      className={selected ? 'active' : ''}
      onClick={() => selectWorkspace(name)}
    />
  )
}

export default WorkspaceButton
