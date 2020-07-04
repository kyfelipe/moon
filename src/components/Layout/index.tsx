import React from 'react'

import { Grid } from './styles'
import WorkspaceList from '../WorkspaceList';

const Layout: React.FC = () => {
  return (
    <Grid>
      <WorkspaceList />
      {/* <WorkspaceData /> */}
    </Grid>
  )
}

export default Layout;
