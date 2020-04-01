import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileDisplay = ({ name, image }) => {
	return(
		<View style={profdispStyles.container}>
			<View>
				<Image
					style={profdispStyles.image}
			        source={{
			          uri: image,
			        }}
		      	/>
			</View>
			<View>
				<Text style={profdispStyles.nameText}>Hi { name }</Text>
			</View>
		</View>
	);
}

export default ProfileDisplay;

const profdispStyles = StyleSheet.create({

	container: {
		marginHorizontal: 30,
		marginBottom: 20
	},
	image: {
		width: 60,
		height: 60,
		borderRadius: 50
	},
	nameText: {
		fontSize: 28,
		color: 'white',
		fontFamily: 'Sen',
		marginTop: 20,
	},
});