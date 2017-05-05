import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import { fetchData } from './actions.js'

const App = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redux Middlewares</Text>
      <Button
        title='Load Data'
        onPress={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

const mapStateToProps = state => {
  return {
    appData: state.dataReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
