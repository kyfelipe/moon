import React from 'react'

import { Button } from './styles'

export interface WorkspaceButtonProps {
  selected?: boolean;
  isHome?: boolean;
}

const WorkspaceButton: React.FC<WorkspaceButtonProps> = ({ selected, isHome }) => {
  console.log(selected)
  return (
    <Button
      isHome={isHome}
      className={selected ? 'active' : ''}
    />
  )
}

export default WorkspaceButton;
