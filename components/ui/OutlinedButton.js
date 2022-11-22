import { Pressable, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const OutlinedButton = ({ icon, children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <FontAwesome style={[styles.icon, styles.text]} name={icon}></FontAwesome>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 20,
  },
  pressed: {
    opacity: 0.6,
  },
  icon: {
    marginRight: 6,
    fontSize: 18,
  },
  text: {
    color: '#ffffff',
  },
});
