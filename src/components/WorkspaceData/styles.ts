import styled from 'styled-components'

// WR - Workspace resources
// WI - Workspace info

export const Container = styled.div`
  grid-area: WD;
  height: 100%;
  width: 100%;

  display: grid;
  
  grid-template-columns: 240px auto;
  grid-template-rows: 100% 100%;
  
  grid-template-areas:
    'WR WI';
`
