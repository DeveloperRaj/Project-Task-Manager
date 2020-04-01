import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
 
import TaskMain from './TaskMain';

const TaskSlider = ({ selectedProject, tasksData }) => {

	const [sliderPosition, setSliderPosition] = useState(130);

	return(
		<View style={[taskSliderStyle.container, {marginTop: sliderPosition}]}>
			<TouchableOpacity style={taskSliderStyle.openerContainer} onPress={() => setSliderPosition((sliderPosition == 130) ? -120 : 130)}>
				<View style={taskSliderStyle.openerMain}></View>
			</TouchableOpacity>
			<View style={taskSliderStyle.header}>
				<Text style={taskSliderStyle.headerText}>Today's Task</Text>
			</View>
			<ScrollView style={taskSliderStyle.taskContainer}>
				{
					selectedProject !== 0 && tasksData.map(task => <TaskMain text={task.taskText} key={task.key}/>)
				}
				{
					selectedProject === 0 && <Text style={{ fontFamily: 'Ubuntu', fontSize: 18, marginHorizontal: 30 }}>Select The Project To View Tasks</Text>
				}
			</ScrollView>
			<View style={taskSliderStyle.addBtnContainer}>
				<TouchableOpacity style={taskSliderStyle.addBtn}>
					<Ionicons name="md-add" size={24} color="white" />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default TaskSlider;

const taskSliderStyle = StyleSheet.create({
	container: {
		height: 350,
		marginHorizontal: 5,
		backgroundColor: 'white',
		borderRadius: 12
	},
	openerContainer: {
		height: 50,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	openerMain: {
		width: 130,
		height: 3,
		backgroundColor: '#909090',
	},
	header: {
		height: 60,
		display: 'flex',
		justifyContent: 'center',
	},
	headerText: {
		fontSize: 24,
		marginLeft: 30,
		fontFamily: 'Cabin',
	},
	taskContainer: {
		minHeight: 170
	},
	addBtnContainer: {
		height: 70,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	addBtn: {
		width: 50,
		height: 50,
		backgroundColor: '#BB2CD9',
		marginRight: 30,
		borderRadius: 12,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}
});