import {useState, useEffect } from 'react'
import { useScreenOrientation } from '@use-expo/screen-orientation'



export const useCustomScreenOrientation = () => {
  const [ orientation ] = useScreenOrientation()

  const landscapeOrPortrait = (mode) => {
    switch (mode) {
      case 0:
        return 'portrait'
      case 1:
        return 'portrait'
      case 2:
        return 'portrait'
      case 3:
        return 'landscape'
      case 4:
        return 'landscape'
    }
  }
  if (orientation) {
    return [landscapeOrPortrait(orientation.orientation), orientation.orientation]
  } else {
    return ['portrait', 0]
  }
}
