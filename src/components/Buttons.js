import {TouchableOpacity, Image} from 'react-native';
import {Icons} from '../assets/icons';
import {Color} from '../assets/constant';

export const FloatingActionButton = ({handlePress}) => {
  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: Color.Green,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        right: 15,
				elevation: 2,
      }}
      onPress={handlePress}>
      <Image
        source={Icons.plusIcon}
        style={{height: 20, width: 20, resizeMode: 'contain'}}
      />
    </TouchableOpacity>
  );
};
