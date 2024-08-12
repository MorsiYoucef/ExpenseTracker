import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useRef } from 'react'
import Modal from 'react-native-modalbox'
import { Dimensions } from 'react-native'

var screen = Dimensions.get('window')
export default function ModalBox() {
  const modalRef = useRef()

  const onClose = () => {
    console.log('Modal just closed')
  }

  const onOpen = () => {
    console.log('Modal just opened')
  }

  const onClosingState = (state) => {
    console.log('the open/close of the swipeToClose just changed')
  }

  const renderList = () => {
    const list = []

    for (let i = 0; i < 50; i++) {
      list.push(
        <Text style={styles.text} key={i}>
          Elem {i}
        </Text>
      )
    }

    return list
  }

  return (
    <Modal
      style={[styles.modal, styles.modal]}
      ref={modalRef}
      swipeToClose={true}
      onClosed={onClose}
      onOpened={onOpen}
      onClosingState={onClosingState}
    >
      <Text style={styles.text}>Basic modal</Text>
      <Button
        title={`Disable swipeToClose(${true ? 'true' : 'false'})`}
        onPress={() => modalRef.current?.setSwipeToClose(!true)}
        style={styles.btn}
      />
    </Modal>
  )
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
