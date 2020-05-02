import React from 'react'
import { MapController } from 'deck.gl'
import { StaticMap } from 'react-map-gl'
import DeckGL from '@deck.gl/react'
import { setViewState, selectViewState } from './worldMapSlice'
import { useSelector, useDispatch } from '../../app/store'

const mapStyle = 'mapbox://styles/mapbox/dark-v10'
const mapboxApiAccessToken =
  'pk.eyJ1IjoiZG9zd2FsZCIsImEiOiJjaXdvd213aHgwMDBsMnlvZWY3amQ4YXR0In0.e9FmfCdPkY6I9DreofObwA'

export default function WorldMap() {
  const viewState = useSelector(selectViewState)
  const dispatch = useDispatch()
  return (
    <div>
      <DeckGL
        layers={[]}
        viewState={viewState}
        controller={MapController}
        onViewStateChange={(e: any) => {
          dispatch(setViewState(e.viewState))
        }}
      >
        <StaticMap
          reuseMaps
          mapboxApiAccessToken={mapboxApiAccessToken}
          mapStyle={mapStyle}
        />
      </DeckGL>
    </div>
  )
}
