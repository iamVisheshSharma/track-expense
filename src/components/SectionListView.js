import {StyleSheet, Text, View, Image, SectionList, Pressable} from 'react-native';
import React from 'react';
import {Color, Fonts, Sizes} from '../assets/constant';
import { findIcon } from '../services/utils';

const SectionListView = ({DATA, onhandlePress}) => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => (
        <Pressable style={styles.item} onPress={() => onhandlePress(item)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={findIcon(item.utility)}
              style={{height: 35, width: 35}}
              resizeMode="contain"
            />
            <View style={{marginLeft: Sizes.Medium}}>
              <Text style={{fontFamily: Fonts.semibold}}>
                {item.utility}{' '}
                <Text style={{fontSize: Sizes.Small + 1, fontFamily: Fonts.medium}}>{item.date}</Text>{' '}
              </Text>
              <Text>{item.description}</Text>
            </View>
          </View>
          <Text style={{marginRight: 6, fontFamily: Fonts.semibold}}>₹ {item.amount.toFixed(2)}</Text>
        </Pressable>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

export default SectionListView;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Sizes.Small,
    paddingVertical: Sizes.Small,
    borderRadius: Sizes.Small,
    backgroundColor: Color.Secondary,
    marginVertical: Sizes.Base,
  },
  header: {
    fontSize: Sizes.ExtraLarge,
    fontFamily: Fonts.bold,
  },
});
