import React from 'react'

import { Grid } from './styles'
import WorkspaceList from '../WorkspaceList'
import WorkspaceData from '../WorkspaceData'
import WorkspaceButton from '../WorkspaceButton'

const Layout: React.FC = () => {
  return (
    <Grid>
      <WorkspaceList>
        <WorkspaceButton name="Initial" selected />
        <WorkspaceButton name="Bloom" />
        <WorkspaceButton name="State" />
        <WorkspaceButton name="Underground" />
        <WorkspaceButton name="Workspace" />
      </WorkspaceList>
      <WorkspaceData />
    </Grid>
  )
}

export default Layout
