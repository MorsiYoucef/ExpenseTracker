import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Modal from 'react-native-modalbox'
import { Dimensions } from'react-native'

var screen = Dimensions.get('window')
export default class ModalBox extends React.Component {
    constructor() {
    super()
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    }
  }

  onClose() {
    console.log('Modal just closed')
  }

  onOpen() {
    console.log('Modal just opened')
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed')
  }

  renderList() {
    var list = []

    for (var i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Elem {i}
        </Text>
      )
    }

    return list
  }

  render() {
    var BContent = (
      <View style={[styles.btn, styles.btnModal]}>
        <Button
          title="X"
          color="white"
          onPress={() => this.setState({ isOpen: false })}
        />
      </View>
    )
  return (
    <Modal
      style={[styles.modal, styles.modal]}
      ref={'modal1'}
      swipeToClose={this.state.swipeToClose}
      onClosed={this.onClose}
      onOpened={this.onOpen}
      onClosingState={this.onClosingState}
    >
      <Text style={styles.text}>Basic modal</Text>
      <Button
        title={`Disable swipeToClose(${
          this.state.swipeToClose ? 'true' : 'false'
        })`}
        onPress={() =>
          this.setState({ swipeToClose: !this.state.swipeToClose })
        }
        style={styles.btn}
      />
    </Modal>
  )
}
}
const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal2: {
    height: 230,
    backgroundColor: '#3B5998',
  },
  modal3: {
    height: 300,
    width: 300,
  },
  modal4: {
    height: 300,
  },
  btn: {
    margin: 10,
    backgroundColor: '#3B5998',
    color: 'white',
    padding: 10,
  },
  btnModal: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: 'transparent',
  },
  text: {
    color: 'black',
    fontSize: 22,
  },
})
