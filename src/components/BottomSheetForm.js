import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Categories, Color, Fonts, MOP, Sizes} from '../assets/constant';
import DatePicker from 'react-native-date-picker';
import {dateFormatter} from '../services/utils';
import {Icons} from '../assets/icons';
import {Dropdown} from 'react-native-element-dropdown';

const BottomSheetForm = ({isFormVisible, onFormClose}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [number, onChangeNumber] = useState('');
  const [desc, onChangeDesc] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocusMop, setIsFocusMop] = useState(false);
  const [valueMop, setValueMop] = useState(null);

  return (
    <Modal
      isVisible={isFormVisible}
      onBackdropPress={onFormClose}
      style={styles.modalContainer}>
      <View style={styles.modalView}>
        <Text style={styles.heading}>Add Expense</Text>
        <View style={styles.formContainer}>
          <View style={styles.formGroup}>
            <Text style={styles.fieldLabel}>Date</Text>
            <TouchableOpacity
              style={[
                styles.input,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              ]}
              onPress={() => setOpen(true)}>
              <Text style={styles.selectedTextStyle}>{dateFormatter(date)}</Text>
              <Image
                source={Icons.schedule}
                style={{
                  width: Sizes.ExtraLarge * 1.3,
                  height: Sizes.ExtraLarge * 1.3,
                }}
              />
            </TouchableOpacity>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.fieldLabel}>How much pay?</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="How much pay?"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.fieldLabel}>Category</Text>
            <Dropdown
              containerStyle={styles.dropdownContainer}
              activeColor={Color.Secondary}
              style={[styles.dropdown, isFocus && {borderColor: Color.Purple}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={Categories}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select category' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.fieldLabel}>Mode of Payment</Text>
            <Dropdown
              containerStyle={styles.dropdownContainer}
              activeColor={Color.Secondary}
              style={[
                styles.dropdown,
                isFocusMop && {borderColor: Color.Purple},
              ]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={MOP}
              search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocusMop ? 'Select mode of pay' : '...'}
              searchPlaceholder="Search..."
              value={valueMop}
              onFocus={() => setIsFocusMop(true)}
              onBlur={() => setIsFocusMop(false)}
              onChange={item => {
                setValueMop(item.value);
                setIsFocusMop(false);
              }}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.fieldLabel}>Description</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeDesc}
              value={desc}
              placeholder="Description"
							placeholderStyle={styles.placeholderStyle}
              keyboardType="default"
							maxLength={50}
							multiline
            />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default BottomSheetForm;

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    backgroundColor: Color.Secondary,
  },
  heading: {
    textAlign: 'center',
    marginVertical: Sizes.Large,
    fontSize: Sizes.Large + 2,
    fontFamily: Fonts.bold,
  },
  formContainer: {
    paddingHorizontal: Sizes.Large,
    paddingVertical: Sizes.Medium,
  },
  formGroup: {
    gap: Sizes.Base,
    marginVertical: Sizes.Small,
  },
  input: {
    height: 40,
    borderWidth: 0.5,
    borderColor: Color.Green,
    padding: Sizes.Small,
    borderRadius: Sizes.Base,
		color: Color.Purple,
    fontFamily: Fonts.semibold
  },
  dropdownContainer: {
    backgroundColor: Color.Primary,
  },
  dropdown: {
    height: 40,
    borderColor: Color.Green,
    borderWidth: 0.5,
    borderRadius: Sizes.Base,
    paddingHorizontal: Sizes.Small,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: Color.Primary,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: Sizes.Small,
    fontSize: Sizes.Medium,
    fontFamily: Fonts.semibold,
  },
  placeholderStyle: {
    fontSize: Sizes.Medium,
		color: Color.Gray,
  },
  selectedTextStyle: {
    fontSize: Sizes.Medium,
		color: Color.Purple,
    fontFamily: Fonts.semibold,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: Sizes.Medium,
    fontFamily: Fonts.semibold,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: Sizes.Base,
    borderColor: Color.Primary,
    backgroundColor: Color.Green,
		marginVertical: Sizes.Medium,
  },
  buttonText: {
    color: Color.Primary,
    fontSize: Sizes.Large,
    fontFamily: Fonts.bold,
  },
  fieldLabel: {
    fontSize: Sizes.Large,
    fontFamily: Fonts.bold
  }
});
