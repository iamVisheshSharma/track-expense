import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useRef, useMemo, useCallback } from 'react';
import Modal from 'react-native-modal';
import { Color, Fonts, Sizes } from '../assets/constant';
import { findIcon } from '../services/utils';

const BottomSheet = ({ isVisible, onClose, data }) => {


	return (
		<Modal
			isVisible={isVisible}
			onBackdropPress={onClose}
			style={styles.modalContainer}>
			<View style={styles.modalContent}>
				{/* <Text style={styles.title}>Details</Text> */}
				<Image source={findIcon(data.utility)} style={[styles.title]} />
				{Object.keys(data).map((item, index) => (
					<View style={styles.wrapper} key={index}>
						{item !== 'icon' ? (<>
							<Text style={styles.itemHeading}>
								{item}
							</Text>
							<Text style={styles.itemContent}>
								{item == 'amount' ? `₹ ${(data[item]).toFixed(2)}` : data[item]}
							</Text>
						</>) : null}
					</View>
				))}
			</View>
		</Modal>
	);
};

export default BottomSheet;

const styles = StyleSheet.create({
	modalContainer: {
		justifyContent: 'flex-end',
		margin: 0,
	},
	modalContent: {
		backgroundColor: Color.Secondary,
		paddingHorizontal: Sizes.Large,
		paddingVertical: Sizes.Medium,
	},
	title: {
		marginBottom: Sizes.Medium,
		marginTop: Sizes.Medium,
		width: Sizes.ExtraLarge*2, 
		height: Sizes.ExtraLarge*2,
		alignSelf: 'center',
	},
	itemHeading: {
		fontSize: Sizes.Large + 2,
		textTransform: 'capitalize',
		color: Color.Purple,
		fontFamily: Fonts.semibold
	},
	itemContent: {
		fontSize: Sizes.Large,
		color: Color.Green,
		fontFamily: Fonts.medium,
	},
	wrapper: {
		marginVertical: Sizes.Base,
	},
});
