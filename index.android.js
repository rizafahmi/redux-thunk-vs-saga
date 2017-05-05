import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './src/configureStore.js'

import App from './src/App.js'

const store = configureStore()

const ReduxToys = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent('ReduxToys', () => ReduxToys)
