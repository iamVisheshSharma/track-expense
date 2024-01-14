import { StyleSheet, Text, View, Dimensions, SectionList, Image } from 'react-native';
import React, { useState } from 'react';
import { Color, Sizes } from '../../assets/constant';
import { BottomSheet, BottomSheetForm, BoxContainer, FloatingActionButton, SectionListView } from '../../components';
import { Icons } from '../../assets/icons';

const DATA = [
	{
		title: 'Jan',
		data: [
			{
				date: '01/01/2024',
				utility: 'Groceries Shopping',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.boxIcon,
				'Mode of payment': 'Cash',
			},
			{
				date: '01/01/2024',
				utility: 'Bill & Utility',
				description: 'Paid milk bill.',
				amount: 1020,
				icon: Icons.billIcon,
				'Mode of payment': 'Paytm',
			},
			{
				date: '01/01/2024',
				utility: 'Medicines/Healthcare',
				description: 'Buy medicine for amma.',
				amount: 42,
				icon: Icons.medicineIcon,
				'Mode of payment': 'iMobilePay',
			},
		],
	},
	{
		title: 'Feb',
		data: [
			{
				date: '01/02/2024',
				utility: 'Food/Snacks',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.billIcon,
				'Mode of payment': 'Cash',
			},
			{
				date: '01/02/2024',
				utility: 'Transportation',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.fastFoodIcon,
				'Mode of payment': 'Gpay',
			},
			{
				date: '01/02/2024',
				utility: 'Gas & Oil',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.transportationIcon,
				'Mode of payment': 'Cash',
			},
		],
	},
	{
		title: 'Mar',
		data: [
			{
				date: '01/02/2024',
				utility: 'Insurance',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.billIcon,
				'Mode of payment': 'Cash',
			},
			{
				date: '01/02/2024',
				utility: 'Clothing',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.fastFoodIcon,
				'Mode of payment': 'Gpay',
			},
			{
				date: '01/02/2024',
				utility: 'Entertainment',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.transportationIcon,
				'Mode of payment': 'Cash',
			},
		],
	},
	{
		title: 'Apr',
		data: [
			{
				date: '01/02/2024',
				utility: 'Shopping',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.billIcon,
				'Mode of payment': 'Gpay',
			},
			{
				date: '01/02/2024',
				utility: 'Miscellaneous',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.fastFoodIcon,
				'Mode of payment': 'paytm',
			},
			{
				date: '01/02/2024',
				utility: 'Miscellaneous',
				description: 'Buy home groceries.',
				amount: 1475,
				icon: Icons.transportationIcon,
				'Mode of payment': 'paytm',
			},
		],
	},
];

const Home = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [currentItem, setCurrentItem] = useState({})
	const [isFormVisible, setIsFormVisible] = useState(false)

	const onClose = () => {
		setIsVisible(false)
	}

	const showItem = (item) => {
		setCurrentItem(item);
		setIsVisible(true);
	}

	const addExpense = () => {
		setIsFormVisible(true)
	}

	return (
		<View style={styles.backgroundStyle}>
			<View style={styles.boxContainerWrapper}>
				<BoxContainer title={'Today Expense'} value={1020} today={true} />
				<BoxContainer title={'January Expense'} value={4000} />
			</View>
			<View style={{ flex: 1, }}>
				<SectionListView DATA={DATA} onhandlePress={showItem} />
			</View>
			<BottomSheet isVisible={isVisible} onClose={onClose} data={currentItem} />
			<BottomSheetForm isFormVisible={isFormVisible} onFormClose={() => setIsFormVisible(false)} />
			<FloatingActionButton handlePress={addExpense} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	backgroundStyle: {
		flex: 1,
		paddingHorizontal: Sizes.Medium,
		backgroundColor: Color.Primary,
	},
	boxContainerWrapper: {
		flexDirection: 'row',
		gap: Sizes.Small,
		marginTop: Sizes.Medium,
	},
});
