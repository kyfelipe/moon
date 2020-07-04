import styled from 'styled-components';

// WL - Workspace List
// WD - Workspace Data

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  
  grid-template-columns: auto auto;
  grid-template-rows: 46px auto;
  
  grid-template-areas:
    'WL WD';
`;