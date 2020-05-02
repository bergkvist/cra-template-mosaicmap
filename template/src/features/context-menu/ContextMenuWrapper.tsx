import React, { useCallback, FunctionComponent, ReactElement } from 'react'
import { ContextMenu } from '@blueprintjs/core'
import styled from 'styled-components'

const WrapperDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const ContextMenuWrapper: FunctionComponent<{ menu: JSX.Element }> = (props) => {
  const element = props.children as ReactElement<any> | null | undefined
  const menu = props.menu
  const oldOnContextMenu = (element as any)?.onContextMenu as React.MouseEventHandler<HTMLElement>
  const onContextMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // Support nested context menus
    if (e.defaultPrevented) return
    e.preventDefault()
    const isDarkTheme = true
    const onClose = () => null
    ContextMenu.show(menu, { left: e.clientX, top: e.clientY }, onClose, isDarkTheme)

    if (typeof oldOnContextMenu === 'function') {
      oldOnContextMenu(e)
    }
  }, [menu])

  return <WrapperDiv onContextMenu={onContextMenu}>
    {props.children}
  </WrapperDiv>
}
