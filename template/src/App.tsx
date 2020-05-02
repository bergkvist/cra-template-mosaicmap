import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import React, { Dispatch, useEffect } from 'react'
import { Panels, PanelLayout } from './features/panel-layout/PanelLayout'
import { addPanelByKey } from './features/panel-layout/panelLayoutSlice'
import { ContextMenuWrapper } from './features/context-menu/ContextMenuWrapper'
import { Menu, MenuItem } from '@blueprintjs/core'
import WorldMap from './features/world-map/WorldMap'
import { useDispatch } from './app/store'

function PanelButtons({
  panels,
  dispatch,
}: {
  panels: Panels
  dispatch: Dispatch<any>
}) {
  return (
    <>
      {Object.entries(panels).map(([key, { label }]) => (
        <MenuItem
          key={key}
          text={`Open ${label}`}
          onClick={() => dispatch(addPanelByKey(key))}
        />
      ))}
    </>
  )
}

function App() {
  const dispatch = useDispatch()

  const panels: Panels = {
    worldmap: { label: 'World Map', title: 'World Map', body: <WorldMap /> },
  }

  const menu = (
    <Menu>
      <PanelButtons panels={panels} dispatch={dispatch} />
    </Menu>
  )

  // Opens the worldmap view
  useEffect(() => {
    dispatch(addPanelByKey('worldmap'))
  }, [dispatch])

  return (
    <ContextMenuWrapper menu={menu}>
      <PanelLayout panels={panels} />
    </ContextMenuWrapper>
  )
}

export default App
