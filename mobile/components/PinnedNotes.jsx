import React from 'react'
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { Entypo } from '@expo/vector-icons'

const PinnedNotes = ({ navigation, pinned }) => {
	return (
		<View>
			<Carousel
				width={400}
				height={150}
				data={pinned}
				autoPlay={true}
				autoPlayInterval={2000}
				mode="parallax"
				modeConfig={{
					parallaxScrollingScale: 0.9,
					parallaxScrollingOffset: 60,
				}}
				// mode="parallax"
				renderItem={({ item }) => {
					return (
						<View style={styles.container}>
							<Text style={styles.title} numberOfLines={1}>
								{item.title}
							</Text>
							<Text style={styles.detail} numberOfLines={2}>
								{item.detail}
							</Text>
							<View
								style={{
									flexDirection: 'row',
									marginTop: 15,
								}}
							>
								<Entypo name="pin" size={22} color="black" />
								<Text
									style={{
										opacity: 0.6,
										marginLeft: 3,
										alignSelf: 'center',
									}}
								>
                  Pinned
								</Text>
							</View>
						</View>
					)
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: Dimensions.get('window').width * 0.9,
		height: 130,
		backgroundColor: '#2A9D8F',
		marginTop: 10,
		marginRight: 20,
		borderRadius: 10,
		padding: 10,
	},
	title: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 5,
	},
	detail: {
		fontSize: 16,
	},
})

export default PinnedNotes
