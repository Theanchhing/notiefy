import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import {
	StyleSheet,
	View,
	Pressable,
	TextInput,
	KeyboardAvoidingView,
	Platform
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonGreen from '../components/ButtonGreen'
function EditProfile(props) {
	const navigation = useNavigation()
	const theme = props
	const [ fullname, setFullname] = useState('')
	const [ nickname, setNickname] = useState('')
	const [ email , setEmail] = useState('')
	// const [Email, ] = React.useState('username@gmail.com')
	return (
		<KeyboardAvoidingView 
			style={{flex: 1}} 
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		>
			<View
				style={{
					backgroundColor: 'grey',
					height: 60,
					justifyContent: 'center',
					alignContent: 'center',
					display: 'flex',
				}}
			>
				<Pressable onPress={() => navigation.goBack()}>
					<AntDesign name="arrowleft" style={{marginTop: 15}} size={24} color="white" />
				</Pressable>
			</View>
			<View style={styles.ViewJb} scrollable={true} hasSafeArea={false}>
				<View
					style={{
						width: '90%',
						alignSelf: 'center',
						justifyContent: 'center',
					}}
					useThemeGutterPadding={true}
					elevation={0}
				>
					<View>
						<TextInput
							placeholder="Fullname"
							value={fullname}
							onChangeText={(newVal) => setFullname(newVal)}
						/>
						<View
							style={styles.ViewOk}
						></View>
					</View>
					<View>
						<TextInput
							placeholder="Nickname"
							keyboardType="default"
							onChangeText={(newVal) => setNickname(newVal)}
							value={nickname}
						/>
						<View
							style={styles.ViewOk}
						></View>
					</View>
					<View>
						<TextInput
							placeholder="Email"
							keyboardType="email-address"
							value={email}
							onChangeText={(newVal) => setEmail(newVal)}
						/>
						<View
							style={styles.ViewOk}
						></View>
					</View>
				</View>
			</View>
			<View style={styles.btnWrapper}>
				<ButtonGreen title="Submit" onPress={() => navigation.navigate('ProfileScreen')}/>
			</View>
		</KeyboardAvoidingView>
	)
}
const styles = StyleSheet.create({
	btnWrapper: {
		marginTop: 30,
	},
	ViewJb: {
		paddingTop: 30
	},
	ViewEA: {
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 10,
	},
	ViewOk: {
		borderTopWidth: 1,
		paddingBottom: 12,
		borderTopColor: '#ccc'
	},
})

export default EditProfile