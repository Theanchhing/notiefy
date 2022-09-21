import React from 'react'
import {
	View,
	Text,
	Image,
	StyleSheet,
	StatusBar,
	Dimensions,
} from 'react-native'
const ProfileScreen = () => {
	return (
		<View style={{ marginTop: StatusBar.currentHeight }}>
			<View style={styles.head}>
				<Text style={styles.myAcc}>MY ACCOUNT</Text>
			</View>
			<View style={styles.imageProfile}>
				<Image
					style={styles.imageProps}
					resizeMode="contain"
					resizeMethod="resize"
				/>
			</View>
			<Text style={styles.username}>Sreysa</Text>
			{/* =============================================================================== */}
			<View style={styles.myProfile}>
				<Text style={styles.myProfileName}>My Profile</Text>
				<View style={styles.bgStyle}>
					<View style={styles.textInMyprofile}>
						<Text style={styles.font}>FullName</Text>
						<Text style={{ marginLeft: 174 }}>Sreysa Lol</Text>
					</View>
					<View style={styles.lineRow} />
					<View style={styles.nickName}>
						<Text style={styles.font}>Nick name</Text>
						<Text style={{ marginLeft: 200 }}>Sasa</Text>
					</View>
					<View style={styles.lineRow} />
					<View style={styles.email}>
						<Text style={styles.font}>Email</Text>
						<Text style={{ marginLeft: 150 }}>User@gmail.com</Text>
					</View>
				</View>
			</View>
			{/* =========================================================== */}
			{/* ==================================================================================================== */}
			<View style={styles.generalSetting}>
				<Text style={styles.myProfileName}>General Setting</Text>
				<View style={styles.bgOfGeneralSetting}>
					<View style={styles.notification}>
						<Text style={styles.font}>Notification</Text>
						<Text style={{ marginLeft: 204 }}>On</Text>
					</View>
					<View style={styles.lineRow} />
					<View style={styles.autoSave}>
						<Text style={styles.font}>Auto save note</Text>
						<Text style={{ marginLeft: 180 }}>Off</Text>
					</View>
					<View style={styles.lineRow} />

					<View style={styles.Device}>
						<Text style={styles.font}>Devices</Text>
						<Text style={{ marginLeft: 203 }}>Iphone</Text>
					</View>
					<View style={styles.lineRow} />

					<View style={{ marginLeft: 10, position: 'relative' }}>
						<Text style={styles.font}>Manage categories</Text>
					</View>
					<View style={styles.lineRow} />
					<View style={{ marginLeft: 10, position: 'relative' }}>
						<Text style={styles.font}>Import note</Text>
					</View>
					<View style={styles.lineRow} />
					<View style={{ marginLeft: 10, position: 'relative' }}>
						<Text style={styles.font}>Recycle bin</Text>
					</View>
					<View style={styles.lineRow} />
					<View style={{ marginLeft: 10, position: 'relative' }}>
						<Text style={styles.font}>Personal and account information</Text>
					</View>
				</View>
			</View>
			{/* ======================================================================== */}
			<View style={styles.About}>
				{/* ===================================== */}
				<View style={styles.autoSave}>
					<Text style={styles.font}>About Us</Text>
				</View>
				<View style={styles.lineRow} />
				<View style={styles.aboutUs}>
					<Text style={styles.font}>Contact Us</Text>
				</View>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	lineRow: {
		marginTop: 4,
		borderBottomColor: '#000',
		borderBottomWidth: 1,
		opacity: 0.15,
	},
	head: {
		// marginTop: 10,
	},
	myAcc: {
		marginLeft: 10,
		marginBottom: 20,
		textAlign: 'left',
		color: '#31d488',
		fontSize: 28,
		fontWeight: 'bold',
		// fontFamily: "James Ariyale",
	},
	imageProfile: {
		justifyContent: 'center',
		flex: 1,
		alignSelf: 'center',
		marginTop: 20,
		height: 80,
		width: 80,
		borderRadius: 75,
		borderColor: 'green',
		borderWidth: 1,
	},
	imageProps: {
		alignSelf: 'center',
		// backgroundColor: "white",

		width: 80,
		height: 80,
		// borderStyle: "solid",
		borderRadius: 75,
		borderColor: 'grey',
		// borderWidth: 3,
		overflow: 'hidden',
		// borderRadius: 75,
	},
	username: {
		color: 'grey',
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		marginTop: 35,
	},
	myProfile: {
		marginTop: 0,
		textAlign: 'left',
		// fontFamily: "James Ariyale",
		alignSelf: 'center',
	},
	myProfileName: {
		textAlign: 'left',
		color: 'grey',
		fontSize: 16,
		// fontFamily: "James Ariyale",
		// alignSelf: "center",
	},
	bgStyle: {
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		// marginLeft: 10,
		marginTop: 10,
		padding: (8, 2, 2, 8),
		width: Dimensions.get('window').width * 0.9,
		color: 'grey',
		alignSelf: 'flex-start',
		position: 'relative',
	},
	textInMyprofile: {
		flexDirection: 'row',
		marginLeft: 10,
		// position: "absolute",
	},
	nickName: {
		flexDirection: 'row',
		marginLeft: 10,
		position: 'relative',
		marginTop: 0,
	},
	email: {
		flexDirection: 'row',
		marginLeft: 10,
		position: 'relative',
	},
	generalSetting: {
		marginTop: 10,
		textAlign: 'left',
		color: 'lime',
		fontSize: 25,
		// fontFamily: "James Ariyale",
		alignSelf: 'center',
	},
	bgOfGeneralSetting: {
		backgroundColor: 'white',
		borderRadius: 10,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		marginLeft: 10,
		marginTop: 10,
		padding: (8, 2, 2, 8),
		width: Dimensions.get('window').width * 0.9,
		color: 'grey',
		alignSelf: 'flex-start',
		position: 'relative',
	},
	notification: {
		flexDirection: 'row',
		marginLeft: 10,
		// position: "absolute",
	},
	aboutUs: {
		marginLeft: 10,
		position: 'relative',
		// marginTop: 10,
	},
	font: {
		// fontFamily: "Cen",
	},
	autoSave: {
		flexDirection: 'row',
		marginLeft: 10,
		position: 'relative',
		marginTop: 0,
	},
	Device: {
		flexDirection: 'row',
		marginLeft: 10,
		position: 'relative',
	},
	//   line: {
	//     marginLeft: 10,
	//     marginTop: 5,
	//     position: "relative",
	//   },
	About: {
		backgroundColor: 'white',
		borderRadius: 10,
		marginTop: 15,
		marginLeft: 10,
		padding: (8, 2, 2, 8),
		width: Dimensions.get('window').width * 0.9,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		color: 'grey',
		alignSelf: 'flex-start',
		position: 'relative',
		alignSelf: 'center',
	},
	aboutUs1: {
		flexDirection: 'row',
		marginLeft: 10,
		position: 'absolute',
	},
})
export default ProfileScreen
