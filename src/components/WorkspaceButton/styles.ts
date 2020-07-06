import styled from 'styled-components'

import { WorkspaceButtonProps } from './index'

export const Button = styled.button<WorkspaceButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 0;
  outline: 0;

  width: 48px;
  height: 48px;
  border-radius: 50%;
  
  margin-bottom: 8px;
  
  color: ${props => props.theme.colors.white};
  font-weight: bold;
  
  background-color: ${props => props.theme.colors.lightPurple};
  
  position: relative;
  cursor: pointer;
  
  transition: border-radius .2s, background-color .2s;
  
  &.active::before {
    width: 9px;
    height: 43px;
    position: absolute;
    left: -17px;
    background-color: white;
    border-radius: 5px;
    content: '';
    display: inline;
  }
  
  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${props => props.theme.colors.darkPurple};
  }
`
