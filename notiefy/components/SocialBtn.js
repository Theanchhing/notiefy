import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

const SocialBtn = ({ customStyle, imgSource, onPress }) => {
	return (
		<View style={styles.socialBtn}>
			<TouchableOpacity onPress={onPress}>
				<Image style={customStyle} source={imgSource} onPress={onPress}></Image>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	socialBtn: {
		backgroundColor: '#FFFFFF',
		width: 40,
		height: 40,
		alignItems: 'center',
		alignContent: 'center',
		margin: 5,
		borderRadius: 10,
		shadowColor: '#000',
		shadowRadius: 3,
		shadowOpacity: 0.2,
	},
})

export default SocialBtn
