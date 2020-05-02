import { createSlice, PayloadAction } from 'react-context-toolkit'
import { RootState } from '../../app/store'
import { FlyToInterpolator } from 'deck.gl'

type Location = {
  latitude: number
  longitude: number
  pitch: number
  bearing: number
  zoom: number
}

type Transition = {
  transitionDuration: number
  transitionInterpolation: any
}

export type ViewState = Location &
  Partial<Transition> & {
    minZoom: number
    maxZoom: number
    width: number
    height: number
  }

export const slice = createSlice({
  name: 'worldMap',
  initialState: {
    viewState: {
      latitude: 60,
      longitude: 8,
      zoom: 6,
      minZoom: 0,
      maxZoom: 22,
      pitch: 50,
      bearing: 0,
      width: 0,
      height: 0,
    } as ViewState,
  },
  reducers: {
    setViewState(state, action: PayloadAction<ViewState>) {
      state.viewState = action.payload
    },
    flyTo(state, action: PayloadAction<Partial<Location>>) {
      state.viewState = {
        ...state.viewState,
        ...action.payload,
        transitionDuration: 3000,
        transitionInterpolation: new FlyToInterpolator(),
      }
    },
  },
})

export const { flyTo, setViewState } = slice.actions

export const selectViewState = (state: RootState) => state.worldMap.viewState

export default slice
