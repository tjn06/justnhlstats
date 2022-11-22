import { useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, Image, Pressable } from 'react-native';
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  useMediaLibraryPermissions,
  PermissionStatus,
} from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'
import Colors from '../utilities/constants/colors';
import Constants from 'expo-constants';

const CameraComponent = () => {
  const [permissionInformation, requestPermission] = useCameraPermissions();
  const [libraryPermissionInfo, requestLibraryPermission] = useMediaLibraryPermissions();
  const [image, setImage] = useState('');

  const verifyAccess = async () => {
    if (permissionInformation.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }
    if (permissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Camera-access denied',
        'Allow camera access to use the camera'
      );
      return false;
    }
    return true;
  };

  const verifyLibraryAccess = async () => {
    if (libraryPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const response = await requestLibraryPermission();
      return response.granted;
    }
    if (libraryPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Library-access denied',
        'Allow camera access to use the camera'
      );
      return false;
    }
    return true;
  };

  const onTakePhotoHandler = async () => {
    const hasPermission = await verifyAccess();
    if (!hasPermission) return;
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setImage(image.uri);
  };

  const libraryPhotoHandler = async () => {
    const hasPermission = await verifyLibraryAccess();
    if (!hasPermission) return;
    const image = await launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
      setImage(image.uri)
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImagePreview}>
        { image ?
            <Image style={styles.image} source={{ uri: image }} resizeMode="cover" />
          :
            <Text style={styles.profilePrevText}>PROFILE IMAGE</Text>
        }
      </View>
      <View style={styles.actionIcons}>
        <Pressable onPress={onTakePhotoHandler} style={{marginHorizontal: 10}}>
          <Ionicons name='camera' size={30} color={'white'}/>
        </Pressable>
        <Pressable onPress={libraryPhotoHandler} style={{marginHorizontal: 10}}>
          <Ionicons name='image' size={30} color={'white'}/>
        </Pressable>
      </View>
    </View>
  );
};

export default CameraComponent;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  profileImagePreview: {
    width: 100,
    height: 100,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    backgroundColor: Colors.lime,
    borderRadius: 200,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 200,
  },
  profilePrevText: {
    textAlign: 'center',
    color: Colors.darkGray,
    fontWeight: 'bold',
  },
  actionIcons: {
    flexDirection: 'row'
  }
});
