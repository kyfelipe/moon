import React from 'react'

import { Grid } from './styles'
import WorkspaceList from '../WorkspaceList'
import WorkspaceData from '../WorkspaceData'
import WorkspaceButton from '../WorkspaceButton'

// const Layout: React.FC = () => {
//   return (
//     <Grid>
//       <WorkspaceList />
//       <WorkspaceData />
//     </Grid>
//   )
// }

const Layout: React.FC = () => {
  return (
    <Grid>
      <WorkspaceList>
        <WorkspaceButton name="W1" selected />
        <WorkspaceButton name="W2" />
        <WorkspaceButton name="W3" />
        <WorkspaceButton name="W4" />
        <WorkspaceButton name="W5" />
      </WorkspaceList>
      <WorkspaceData />
    </Grid>
  )
}

export default Layout
