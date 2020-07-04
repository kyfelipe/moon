import React, { useCallback, useMemo } from 'react'
import { remote } from 'electron'
import os from 'os'
import { FiX, FiMinus, FiMaximize2 } from 'react-icons/fi'

import { useConfig } from '../../hooks/useConfig'
import {
  Container,
  WindowActions,
  MacActionButton,
  DefaultActionButton,
  Close,
  Minimize,
  Square
} from './styles'

const Header: React.FC = () => {
  const handleCloseWindow = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.close()
  }, [])

  const handleMaximize = useCallback(() => {
    const window = remote.getCurrentWindow()

    const { width: currentWidth, height: currentHeight } = window.getBounds()

    const { width: maxWidth, height: maxHeight } = remote.screen.getPrimaryDisplay().workAreaSize

    const isMaximized = (currentWidth === maxWidth && currentHeight === maxHeight)

    if (!isMaximized) {
      window.maximize()
    } else {
      window.unmaximize()
    }
  }, [])

  const handleMinimize = useCallback(() => {
    const window = remote.getCurrentWindow()

    window.minimize()
  }, [])

  const useMacOSWindowActionButtons = useConfig('useMacOSWindowActionButtons')

  const shouldUseMacOSWindowActions = useMemo(() => {
    return useMacOSWindowActionButtons || os.platform() === 'darwin'
  }, [useMacOSWindowActionButtons])

  return (
    <Container>
      <strong>Project: Moon</strong>

      {shouldUseMacOSWindowActions ? (
        <WindowActions position="left">
          <MacActionButton color="close" onClick={handleCloseWindow}>
            <FiX />
          </MacActionButton>
          <MacActionButton color="minimize" onClick={handleMinimize}>
            <FiMinus />
          </MacActionButton>
          <MacActionButton color="maximize" onClick={handleMaximize}>
            <FiMaximize2 />
          </MacActionButton>
        </WindowActions>
      ) : (
        <WindowActions position="right">
          <DefaultActionButton typeAction="default" onClick={handleMinimize}>
            <Minimize />
          </DefaultActionButton>
          <DefaultActionButton typeAction="default" onClick={handleMaximize}>
            <Square />
          </DefaultActionButton>
          <DefaultActionButton typeAction="close" onClick={handleCloseWindow}>
            <Close />
          </DefaultActionButton>
        </WindowActions>
      )}
    </Container>
  )
}

export default Header;