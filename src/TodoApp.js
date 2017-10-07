import React, { Component } from 'react';
import { 
  Text, View, TextInput, Alert, Keyboard,
  ScrollView, TouchableHighlight, 
  TouchableOpacity 
} from 'react-native';
import { Audio } from 'expo';
import styles from './styles'; 
import TodoItem from './TodoItem';

const dingSound = new Expo.Audio.Sound();

dingSound.loadAsync(require('./ding.mp3'))
  .then(() => console.log('Sound loaded'))
  .catch(() => Alert.alert('Error loading sound'))

export default class TodoApp extends Component {
  constructor() {
    super();
    
    this.state = {
      todos: [ 
        { text: 'Learn CSS and HTML ' }, 
        { text: 'Learn to Google' }, 
        { text: 'Learn Javascript Fundamentals' }, 
        { text: 'Learn React' }
      ],
      textInput: ''
    }
  }

  promptHandler(index) {
    const todoText = this.state.todos[index].text;
    Alert.alert(
      todoText,
      "Do you want to remove it?",
      [
        {text: "Cancel"},
        { text: "OK", onPress: this.removeTodo.bind(this, index) }
      ],
      { cancelable: false }
    );
  }

  removeTodo(index) {
    const todos = [
      ...this.state.todos.slice(0, index), 
      ...this.state.todos.slice(index + 1)
    ];
    this.setState({ todos });
  }

  addTodoHandler(e) {
    const text = this.state.textInput;

    if (text.length > 0) {
      // playing sound
      dingSound.playAsync();
      // rewind sound
      dingSound.setPositionAsync(0);
      // add new todo
      const todos = [{ text }, ...this.state.todos];
      // clear text Input
      this.setState({ todos, textInput: '' });
      // hide Keyboard
    }

    Keyboard.dismiss();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TodoApp</Text>
        <Text style={styles.subtitle}>Add or Remove Todos</Text>

        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(textInput) => this.setState({ textInput })}
            onSubmitEditing={this.addTodoHandler.bind(this)}
            style={styles.input} 
            value={this.state.textInput} 
            placeholder="New todo item" />

          <TouchableOpacity 
            style={styles.button} 
            onPress={this.addTodoHandler.bind(this)}>
            <Text style={styles.buttonText}> Add </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.TodoList}>
          {this.state.todos.map((todo, index) => (
            <TouchableOpacity 
              key={index} 
              style={{ width: '100%' }} 
              onPress={this.promptHandler.bind(this, index)}>
                <TodoItem text={todo.text} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  }
}

