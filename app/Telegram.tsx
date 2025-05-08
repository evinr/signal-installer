import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/SignalInfo';
import { Text, View } from '@/components/Themed';
import React from 'react';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Download Telegram X without an Appstore</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>      Installer allows for users to download the Telegram X APK directly from the source website. After the Telegram X APK is done downloading it can be installed from the Downloads folder.</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
