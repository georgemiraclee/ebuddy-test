'use client'

import { Provider } from 'react-redux'
import store from './store'
import React from 'react'

export function ProviderWrapper({ children }: { children: any }) {
  return <Provider store={store}>{children}</Provider>
}
