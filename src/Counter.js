import { Button, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addition,subtraction} from './store/action'

const Counter = (props) => {

const data = useSelector((state)=> state.counter)
const dispatch = useDispatch()

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>

        <Button
        title='Add Count' onPress={()=>dispatch(addition())}/>

      <Text> {data} </Text>

      <Button
        title='Subtract Count' onPress={()=>dispatch(subtraction())}/>
    </View>
  )
}

export default React.memo(Counter)