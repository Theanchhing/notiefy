import React, { useState } from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar,
	Dimensions,
	Pressable,
	ScrollView,
	Button,
	WebView,
	ImageBackground,
	TouchableOpacity,
} from 'react-native'
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu'
import * as ImagePicker from 'expo-image-picker'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'


const ProfileScreen = ({ navigation }) => {
	const [image, setImage] = useState(null)

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 4],
			quality: 1,
		})

		console.log(result)

		if (!result.cancelled) {
			setImage(result.uri)
		}
	}

	const sampleData = {fullname: 'Lol Sreysa', nickname: 'SaSa', email: 'sreysa168@gmail.com'}

	return (
		<ScrollView>
			<View style={{ marginTop: StatusBar.currentHeight }}>
				<Text style={styles.myAcc}>MY ACCOUNT</Text>
				<View style={styles.threeDotWrapper}>
					<Menu>
						<MenuTrigger>
							<Entypo style={{ transform: [{ rotate: '90deg'}] }} name="dots-three-horizontal" size={20} color="grey" /> 
						</MenuTrigger>
						<MenuOptions customStyles={optionsStyles}>
							<MenuOption customStyles={optionStyles} onSelect={() => console.log('User Log Out')} >
								<Text style={{color: '#ff0000', textAlign: 'center'}} >Log Out</Text>
							</MenuOption>
						</MenuOptions>
					</Menu>
				</View>
				<View style={styles.profileWrapper}>
					{ !image && <TouchableOpacity style={styles.noImage} onPress={pickImage}>
						<MaterialCommunityIcons name="image-plus" size={28} color="grey" />
						<Text style={{ color: 'grey' }}>Add Image</Text>
					</TouchableOpacity>
					}
					<TouchableOpacity onLongPress={pickImage}>
						{image && <Image source={{ uri: image }} style={styles.profile} />}
					</TouchableOpacity>
				</View>
				{/* =============================================================================== */}
				<View style={styles.innerContainer}>
					<Text style={styles.subHeading}>My Profile</Text>
					<View style={styles.bgStyle}>
						<View style={styles.rowWrapper}>
							<Text>FullName</Text>
							<Text>{sampleData.fullname}</Text>
						</View>
						<View style={styles.lineRow} />
						<View style={styles.rowWrapper}>
							<Text>Nickname</Text>
							<Text>{sampleData.nickname}</Text>
						</View>
						<View style={styles.lineRow} />
						<View style={styles.rowWrapper}>
							<Text>Email</Text>
							<Text>{sampleData.email}</Text>
						</View>
					</View>
				</View>
				{/* ==================================================================================================== */}
				<View style={styles.innerContainer}>
					<Text style={styles.subHeading}>General Setting</Text>
					<View style={styles.bgStyle}>
						<TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
							<Text>Change account information</Text>
						</TouchableOpacity>
						<View style={styles.lineRow} />
						<TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
							<Text>Change password</Text>
						</TouchableOpacity>
					</View>
				</View>
				{/* ======================================================================== */}
				<View style={[styles.bgStyle, {alignSelf: 'center', marginTop: 10}]}>
					<TouchableOpacity onPress={() => navigation.navigate('AboutUs')}>
						<Text>About Us</Text>
					</TouchableOpacity>
					<View style={styles.lineRow} />
					<TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
						<Text>Contact Us</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	)
}

const optionsStyles = {
	optionsContainer: {
		width: 90,
		borderRadius: 10,
		marginTop: 20
	}
}

const optionStyles = {
	optionWrapper: {
		padding: 8
	}
}

const styles = StyleSheet.create({
	threeDotWrapper: {
		position: 'absolute',
		// backgroundColor: 'pink',
		// alignItems: 'flex-end',
		top: 18,
		right: 14
	},
	myAcc: {
		marginLeft: 10,
		marginVertical: 10,
		textAlign: 'left',
		color: '#31d488',
		fontSize: 28,
		fontWeight: 'bold',
	},
	profileWrapper: { 
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center' 
	},
	noImage: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 100,
		height: 100,
		borderRadius: 75,
		overflow: 'hidden',
		borderWidth: 3,
		borderColor: '#C0F7B7',
	},
	profile: {
		width: 100,
		height: 100,
		borderRadius: 75,
		overflow: 'hidden',
		// borderWidth: 3,
		// borderColor: '#C0F7B7',
	},
	lineRow: {
		marginVertical: 7,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		opacity: 0.15,
	},
	username: {
		color: 'grey',
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	innerContainer: {
		marginTop: 10,
		textAlign: 'left',
		alignSelf: 'center',
	},
	subHeading: {
		textAlign: 'left',
		color: 'grey',
		fontSize: 16,
	},
	bgStyle: {
		backgroundColor: 'white',
		width: Dimensions.get('window').width * 0.9,
		marginTop: 5,
		padding: (10, 2, 2, 10),
		borderRadius: 10,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	rowWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 5
	},
})
export default ProfileScreen
