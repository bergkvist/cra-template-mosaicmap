import { createSlice, PayloadAction } from 'react-context-toolkit'
import { RootState } from '../../app/store'
import { MosaicGrid, MosaicKey } from './PanelLayout'
import {
  MosaicNode,
  updateTree,
  getNodeAtPath,
  getPathToCorner,
  getLeaves,
  Corner,
} from 'react-mosaic-component'

function withExtraPanel(grid: MosaicGrid, key: MosaicKey): MosaicGrid {
  if (getLeaves(grid).includes(key)) return grid
  if (!grid) return key
  const path = getPathToCorner(grid, Corner.BOTTOM_LEFT)
  const destination = getNodeAtPath(grid, path) as MosaicNode<MosaicKey>
  return updateTree(grid, [
    {
      path,
      spec: {
        $set: {
          direction: 'row',
          first: key,
          second: destination,
          splitPercentage: 25,
        },
      },
    },
  ])
}

export const slice = createSlice({
  name: 'panelLayout',
  initialState: {
    mosaicGrid: null as MosaicGrid,
  },
  reducers: {
    setMosaicGrid(state, action: PayloadAction<MosaicGrid>) {
      state.mosaicGrid = action.payload
    },
    addPanelByKey(state, action: PayloadAction<MosaicKey>) {
      state.mosaicGrid = withExtraPanel(state.mosaicGrid, action.payload)
    },
  },
})

export const { setMosaicGrid, addPanelByKey } = slice.actions
export const selectMosaicGrid = (state: RootState) =>
  state.panelLayout.mosaicGrid
export default slice
