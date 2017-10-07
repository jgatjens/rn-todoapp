import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center'
  },
  title: {
  	fontSize: 30,
  	color: '#000',
  	marginBottom: 10
  },
  subtitle: {
  	fontSize: 15,
  	color: '#6F7B87'
  },
  input: {
  	backgroundColor: '#EFEFEF',
  	borderRadius: 10,
  	height: 64,
  	width: '67%',
  	paddingLeft: 20,
  	marginRight: '3%'
  },
  buttonText: {
  	height: 64,
  	lineHeight: 64,
  	textAlign: 'center',
  	fontSize: 20,
  	fontWeight: 'bold',
  	color: '#fff',
  	borderRadius: 10,
  },
  button: {
  	backgroundColor: '#FF5A5F',
  	borderRadius: 10,
  	overflow: 'hidden',
  	width: '29%'
  },
  inputContainer: {
  	marginTop: 30,
  	flex: -1,
  	width: '95%',
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  TodoList: {
  	marginTop: 30,
  	flex: 1,
  	width: '94%'
  },

  todoItem: { 
  	borderColor: '#EFEFEF',
  	borderWidth: 1,
  	textAlign: 'left',
  	fontSize: 20,
  	fontWeight: "200",
  	color: '#484848',
  	paddingLeft: 20,
  	borderRadius: 10,
  	lineHeight: 64,
  	height: 64
  },

  todoItemContainer: {
  	marginBottom: 12,
  	backgroundColor: '#fff',
  	height: 64,
  	width: '94%',
  	overflow: 'hidden',
  	width: '100%'
  },

  shadow: {
  	// shadow
  	// backgroundColor: '#cfcfcf',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 2,
    height: 50,
    width: 200
  }
});

export default styles;