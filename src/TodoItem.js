import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'; 

const TodoItem = (props) => {
  return (
    <TouchableOpacity  style={{ width: '100%' }}>
      <View style={styles.todoItemContainer}>
        <Text style={styles.todoItem}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TodoItem;