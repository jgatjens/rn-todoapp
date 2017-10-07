import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const TodoItem = props => {
	return (
		<View style={styles.todoItemContainer}>
			<Text style={styles.todoItem}>{props.text}</Text>
		</View>
	);
};

export default TodoItem;