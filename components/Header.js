import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
	return(
		<View style={headerStyles.container}>
			<View style={headerStyles.menuIconStyle}>
				<Ionicons name="md-menu" size={28} color="white"/>
			</View>
		</View>
	);
}

export default Header;

const headerStyles = StyleSheet.create({
	container: {
		height: 100,
		paddingTop: StatusBar.currentHeight,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: 15,
	},
	menuIconStyle: {
		width: 40,
		height: 40,
		backgroundColor: '#3b3f54',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50
	},
});