import React, { Component } from 'react';
import { 
  Text, View, TextInput, Alert, Keyboard,
  ScrollView, TouchableHighlight, 
  TouchableOpacity 
} from 'react-native';
import Sound from 'react-native-sound';
import styles from './styles'; 
import TodoItem from './TodoItem';

export default class TodoApp extends Component {
  constructor() {
    super();
    
    this.state = {
      todos: [],
      textInput: ''
    }
  }

  removeTodo() {
    Alert.alert('remove todo');
  }

  addTodo(e) {
    const text = this.state.textInput;

    const audio = require('./ding.mp3');

    audio.play

    if (text.length > 0) {
      const todos = [...this.state.todos, { text }];
      this.setState({ todos, textInput: '' });
      Keyboard.dismiss();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TodoApp</Text>
        <Text style={styles.subtitle}>Add and Remove Todos</Text>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(textInput) => this.setState({ textInput })}
            onSubmitEditing={this.addTodo.bind(this)}
            style={styles.input} 
            value={this.state.textInput} 
            placeholder="New todo item" />

          <TouchableOpacity 
            style={styles.button} 
            onPress={this.addTodo.bind(this)}>
            <Text style={styles.buttonText}> Add </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.TodoList}>
          {this.state.todos.map((todo, i) => (
            <TouchableOpacity key={i} style={{ width: '100%' }} onPress={this.removeTodo.bind(this)}>
              <TodoItem text={todo.text} />
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* <View style={styles.shadow}></View> */}

      </View>
    );
  }
}

