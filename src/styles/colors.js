import { modePicker } from "../scripts/core-functions"
import React, { useState, useEffect } from 'react';

const modeState = modePicker();

export const lightToDark = () => (
  {
    primaryColor: () => {
      if (modeState.value === 'light') {
        return '12,234,34'
      } else if (modeState.value === 'dark') {
        return '0,0,0'
      }
    }
  }
)



let dark = lightToDark()

export const colors = {
  primaryColor: dark.primaryColor,
  secondaryColor: '199, 177, 152',
  backgroundColor: '255, 255, 255',
  textColor: '48, 51, 57',
  brownColor: '240, 236, 227',
  fullDarkColor: '0, 0, 0',
  whiteColor: '255, 255, 255'
}

export const themePink = {
  primaryColor: '255, 255, 255',
  secondaryColor: '36, 14, 56',
  secondaryColorLighter: '75, 49, 86',
  lighterColor: '208, 169, 221'
}