import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Color, Fonts, Sizes} from '../assets/constant';
import {Icons} from '../assets/icons';
import {dateFormatter} from '../services/utils';

const BoxContainer = ({title, value, today}) => {
  const todayDate = dateFormatter(new Date());

  return (
    <View style={styles.boxContainerStyle}>
      <Text style={styles.boxContainerHeadingText}>{title}</Text>
      {today && <Text style={styles.boxContainerDate}>{todayDate}</Text>}
      <View style={styles.iconTextWrapper}>
        <Image
          source={Icons.rupeeIcon}
          tintColor={Color.Green}
          resizeMode="contain"
          style={{height: Sizes.ExtraLarge, width: Sizes.ExtraLarge}}
        />
        <Text style={styles.boxContainerTextStyle}>{value}</Text>
      </View>
    </View>
  );
};

export default BoxContainer;

const styles = StyleSheet.create({
  boxContainerStyle: {
    height: Dimensions.get('window').width / 3.5,
    width: Dimensions.get('window').width / 2 - Sizes.Medium,
    borderRadius: Sizes.Small,
    backgroundColor: Color.Secondary,
    paddingHorizontal: Sizes.Medium,
    paddingVertical: Sizes.Small,
    elevation: Sizes.Base,
  },
  boxContainerHeadingText: {
    fontSize: Sizes.Medium + 2,
    fontFamily: Fonts.bold
  },
	boxContainerDate: {
		fontSize: Sizes.Medium - 2,
    fontFamily: Fonts.semibold,
	},
  boxContainerTextStyle: {
    fontSize: Sizes.ExtraLarge,
    color: Color.Green,
    fontFamily: Fonts.bold,
  },
  iconTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Sizes.Small,
  },
});
