import styled from 'styled-components';

// WL - Workspace List
// WD - Workspace Data

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  
  grid-template-columns: 71px auto;
  grid-template-rows: 100% 100%;
  
  grid-template-areas:
    'WL WD';
`;