import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TaskMain = ({ text }) => {

	const [isChecked, setIsChecked] = useState(false);

	return(
		<View style={taskMainStyles.container}>
			<TouchableOpacity style={taskMainStyles.isCompletedContainer} onPress={() => setIsChecked((isChecked) ? false : true)}>
				<Ionicons name="ios-checkmark-circle" size={28} color={(isChecked) ? "#40d4d4" : "#717171"} />
			</TouchableOpacity>
			<View style={taskMainStyles.taskTextContainer}>
				<Text style={{ fontFamily: 'Cabin', color: '#616161' }}>{ text }</Text>
			</View>
		</View>
	);
}

export default TaskMain;

const taskMainStyles = StyleSheet.create({
	container: {
		minHeight: 60,
		marginHorizontal: 30,
		display: 'flex',
		flexDirection: 'row',
	},
	isCompletedContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	taskTextContainer: {
		flex: 4,
		justifyContent: 'center',
	},
});