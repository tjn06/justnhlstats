import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ onPressed }) => {
  return (
    <Pressable onPress={onPressed}>
      <Ionicons name='star' size={18} color='#ffffff' />
    </Pressable>
  );
};

export default IconButton;
