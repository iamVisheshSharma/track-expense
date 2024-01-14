import { Month } from "../assets/constant";
import { Icons } from "../assets/icons";

export const dateFormatter = (date) => {
	const currentDate = new Date(date);
	const day = currentDate.getDate();
	const month = Month[currentDate.getMonth()].length > 5 ? Month[currentDate.getMonth()].slice(0,3) : Month[currentDate.getMonth()];
	const year = currentDate.getFullYear();
	return `${day} ${month}, ${year}`
}

export const findIcon = (icon) => {
	switch(icon){
		case 'Groceries Shopping':
			return Icons.boxIcon;
		case 'Medicines/Healthcare':
			return Icons.medicineIcon;
		case 'Bill & Utility':
			return Icons.billIcon;
		case 'Food/Snacks':
			return Icons.fastFoodIcon;
		case 'Transportation':
			return Icons.transportationIcon;
		case 'Gas & Oil':'Clothing'
			return Icons.gasIcon;
		case 'Insurance':
			return Icons.insuranceIcon;
		case 'Clothing':
			return Icons.clothingIcon;
		case 'Entertainment':
			return Icons.entertainmentIcon;
		case 'Shopping':
			return Icons.shoppingIcon;
		case 'Miscellaneous':
			return Icons.miscellIcon;
		default:
			return Icons.miscellIcon;
	}
}