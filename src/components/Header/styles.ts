import styled, { css } from 'styled-components'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { WindowMinimize } from '@styled-icons/fa-regular'
import { Square as SquareIcon } from '@styled-icons/boxicons-regular'

export const Container = styled.header`
  width: 100%;
  height: 30px;
  position: relative;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.backgrounds.darkest};

  strong {
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
  }
`

interface WindowActionsProps {
  position: 'left' | 'right';
}

export const WindowActions = styled.div<WindowActionsProps>`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  ${props => props.position === 'left' ? css`left: 0;` : css`right: 0;`};
`

interface MacActionButtonProps {
  color: 'close' | 'minimize' | 'maximize';
}

const colors = {
  close: '#E96379',
  minimize: '#e7de79',
  maximize: '#67e480'
}

export const MacActionButton = styled.button<MacActionButtonProps>`
  background: ${props => colors[props.color]};
  -webkit-app-region: no-drag;
  border: 0;
  width: 12px;
  height: 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  & + button {
    margin-left: 8px;
  }
  svg {
    width: 8px;
    height: 8px;
    opacity: 0.9;
    display: none;
  }
  &:hover svg {
    display: block;
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: 0;
  }
`

interface DefaultActionButtonProps {
  typeAction: 'default' | 'close';
}

export const DefaultActionButton = styled.button<DefaultActionButtonProps>`
  background: transparent;
  -webkit-app-region: no-drag;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${props => props.typeAction == 'default' ? '0 12px' : '0 8px'};
  color: ${props => props.theme.colors.grey};

  &:hover {
    background-color: ${props => props.typeAction == 'default' ? 'rgba(130,131,134, 0.2)' : '#D71526'};
    color: ${props => props.typeAction == 'default' ? props.theme.colors.grey : props.theme.colors.white};
  }
  
  &:focus {
    outline: 0;
  }
`

export const Close = styled(CloseOutline)`
  width: 20px;
  height: 20px;
`

export const Square = styled(SquareIcon)`
  width: 16px;
  height: 16px;
  color: ${props => props.theme.colors.grey};
`

export const Minimize = styled(WindowMinimize)`
  width: 14px;
  height: 14px;
  margin-top: -8px;
  color: ${props => props.theme.colors.grey};
`
