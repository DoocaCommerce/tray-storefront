import * as React from 'react'
import { useDispatch } from 'react-redux'
import { socket } from '@tray-storefront/core'
import { updateSections } from '../../store/modules/sections'
import { updateSettings } from '../../store/modules/settings'

function RootProvider(props) {
  const urlParams = new URLSearchParams(window.location.search)
  const hashPreview = urlParams.get('preview')
  const dispatch = useDispatch()

  function onUpdate({ shopID, data }) {
    if (data) {
      dispatch(updateSettings(data?.settings))
      dispatch(updateSections(data?.sections))
    }
  }

  if (hashPreview) {
    socket.create(hashPreview, onUpdate)
  }

  return <>{props.children}</>
}

export default RootProvider
