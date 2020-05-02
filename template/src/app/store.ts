import { createStore } from 'react-context-toolkit'
import worldMapSlice from '../features/world-map/worldMapSlice'
import panelLayoutSlice from '../features/panel-layout/panelLayoutSlice'

export const {
  StateProvider,
  useSelector,
  useDispatch,
  initialState,
} = createStore([worldMapSlice, panelLayoutSlice])

export type RootState = typeof initialState
