import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Project from './Project';

const ProjectsDisplay = ({ projectData, selectedProject, setSelectedProject }) => {

	return(
		<View style={projectDisplay.container}>
			<View style={projectDisplay.searchBar}>
				<View style={projectDisplay.searchIconContainer}>
					<Ionicons name="md-search" size={20} color="#989898"/>
				</View>
				<View style={projectDisplay.searchInputContainer}>
					<TextInput
						placeholderTextColor = "#989898" 
						placeholder="Search Task or Project"
						style={projectDisplay.searchInputMain}
					/>
				</View>
			</View>
			<View>
				<Text style={projectDisplay.headerText}>Projects <Text style={{ color: '#818181' }}>(13)</Text></Text>
			</View>
			<ScrollView style={projectDisplay.projectContainer} horizontal={true}>
				{
					projectData.map(pro => (
						<Project 
							id={pro.key} 
							shortName={pro.shortName} 
							projectName={pro.projectName} 
							thumbnailColor={pro.thumbnailColor} 
							key={pro.key} 
							selectProject={selectedProject} 
							setSelection={setSelectedProject}
						/>
					))
				}
			</ScrollView>
		</View>
	);
}

export default ProjectsDisplay;

const projectDisplay = StyleSheet.create({
	container: {
		height: 120,
	},
	searchBar: {
		height: 50,
		backgroundColor: '#3b3f54',
		borderRadius: 20,
		display: 'flex',
		flexDirection: 'row',
		marginHorizontal: 20
	},
	searchIconContainer: {
		flex: 1,
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	searchInputContainer: {
		flex: 4,
		borderTopRightRadius: 20,
		borderBottomRightRadius: 20,
		justifyContent: 'center',
	},
	searchInputMain: {
		color: '#989898',
		fontFamily: 'Ubuntu',
	},
	headerText: {
		marginTop: 30,
		fontSize: 18,
		color: 'white',
		fontFamily: 'Ubuntu',
		marginHorizontal: 30
	},
	projectContainer: {
		marginTop: 15,
		marginLeft: 20,
		minHeight: 120
	},
});