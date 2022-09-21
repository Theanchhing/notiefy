import React, { useState } from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputText = ({ placeholderText, color, value, onTextChange }) => {
	// const [input, setInput] = useState('')
	// console.log(color);
	return (
		<TextInput
			style={[styles.textInputStyle, { backgroundColor: color }]}
			onChangeText={(newValue) => onTextChange(newValue)}
			placeholder={placeholderText}
			autoCapitalize="none"
			autoCorrect={false}
			value={value}
		/>
	)
}

const styles = StyleSheet.create({
	textInputStyle: {
		borderRadius: 10,
		height: 44,
		marginLeft: 30,
		marginRight: 30,
		padding: 10,
		marginTop: 8,
	},
})

export default InputText
