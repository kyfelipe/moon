import React from 'react'

import { Container } from './styles'
import WorkspaceButton from '../WorkspaceButton';

const WorkspaceList: React.FC = () => {
  return (
    <Container>
      <WorkspaceButton selected />
      <WorkspaceButton />
      <WorkspaceButton />
      <WorkspaceButton />
    </Container>
  )
}

export default WorkspaceList;
