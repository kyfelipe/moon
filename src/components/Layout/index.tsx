import React from 'react'

import { Grid } from './styles'
import WorkspaceList from '../WorkspaceList'
import WorkspaceData from '../WorkspaceData'
import WorkspaceButton from '../WorkspaceButton'

const Layout: React.FC = () => {
  return (
    <Grid>
      <WorkspaceList>
        <WorkspaceButton name="Home" isHome />
        <WorkspaceButton name="Initial" />
        <WorkspaceButton name="Bloom" />
        <WorkspaceButton name="State" />
        <WorkspaceButton name="Underground" />
        <WorkspaceButton name="Workspace" />
        <WorkspaceButton name="add" isAdd />
      </WorkspaceList>
      <WorkspaceData />
    </Grid>
  )
}

export default Layout
