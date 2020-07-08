import React, { useContext, useRef, useEffect } from 'react'

import WorkspaceListContext from '../../context/WorkspaceListContext'
import { Button, AddIcon } from './styles'

export interface WorkspaceButtonProps {
  name: string;
  selected?: boolean;
  isHome?: boolean;
  isAdd?: boolean;
}

const WorkspaceButton: React.FC<WorkspaceButtonProps> = ({ name, selected, isHome, isAdd }) => {
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
      isAdd={isAdd}
      className={isHome ? 'active' : ''}
      onClick={() => selectWorkspace(name)}
    >
      {(!isHome && !isAdd) && name[0]}
      {isAdd && <AddIcon color="white"/>}
    </Button>
  )
}

export default WorkspaceButton
