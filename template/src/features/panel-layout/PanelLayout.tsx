import 'react-mosaic-component/react-mosaic-component.css'
import React, { FunctionComponent } from 'react'
import { Mosaic, MosaicWindow, MosaicParent } from 'react-mosaic-component'
import { Classes } from '@blueprintjs/core'
import { useSelector, useDispatch } from '../../app/store'
import { setMosaicGrid, selectMosaicGrid } from './panelLayoutSlice'

export type MosaicKey = string
export type MosaicGrid = null | MosaicKey | MosaicParent<MosaicKey>
export type Panels = Record<
  MosaicKey,
  {
    label: string
    title: string
    body: JSX.Element
  }
>

export const PanelLayout: FunctionComponent<{ panels: Panels }> = ({
  panels,
}) => {
  const mosaicGrid = useSelector(selectMosaicGrid)
  const dispatch = useDispatch()
  return (
    <Mosaic<MosaicKey>
      value={mosaicGrid}
      onChange={(grid) => dispatch(setMosaicGrid(grid))}
      className={`mosaic-blueprint-theme ${Classes.DARK}`}
      resize={{ minimumPaneSizePercentage: 1 }}
      renderTile={(id, path) => (
        <MosaicWindow path={path} title={panels[id].title}>
          {panels[id].body}
        </MosaicWindow>
      )}
    />
  )
}
