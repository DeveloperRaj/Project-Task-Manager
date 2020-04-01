import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Project = ({ id, projectName, shortName, thumbnailColor, selectProject, setSelection }) => {

	const backCol = (selectProject === id) ? 'grey' : thumbnailColor;

	return(
		<TouchableOpacity onPress={() => setSelection(id)}>
			<View style={projectStyles.container}>
				<View style={[projectStyles.thumbnailContainer, { backgroundColor: backCol }]}>
					<Text style={projectStyles.thumbnailText}>{ shortName }</Text>
				</View>
				<View style={projectStyles.projectNameContainer}>
					<Text style={projectStyles.projectName}>{ projectName }</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default Project;

const projectStyles = StyleSheet.create({
	container: {
		margin: 10,
		width: 80
	},
	thumbnailContainer: {
		width: 80,
		height: 80,
		borderRadius: 22,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	thumbnailText: {
		color: 'white',
		fontSize: 24,
		fontFamily: 'Ubuntu',
	},
	projectNameContainer: {
		width: 80,
		marginTop: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	projectName: {
		fontSize: 12,
		color: '#989898',
		fontFamily: 'Ubuntu',
	},
});