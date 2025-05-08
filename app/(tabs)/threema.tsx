import React, { useRef, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Text, View } from '@/components/Themed';
import { WebView } from 'react-native-webview';

export default function ThreemaScreen() {
  const webviewRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  
  const initializationCode = `window.ReactNativeWebView.postMessage('{}');`;

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  const handleError = (event) => {
    console.log('WebView error:', event);
    setHasError(true);
    setIsLoading(false);
  };

  if (hasError) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>
          Unable to load Threema download page. Please check your internet connection.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" />
          <Text style={styles.loadingText}>Loading Threema download page...</Text>
        </View>
      )}
      
      <WebView 
        ref={webviewRef}
        style={styles.webview}
        source={{ uri: 'https://shop.threema.ch/en/download' }}
        originWhitelist={['*']}
        injectedJavaScript={initializationCode}
        onLoadStart={handleLoadStart}
        onLoadEnd={handleLoadEnd}
        onError={handleError}
        onMessage={event => {
          console.log('Message from WebView:', event.nativeEvent.data);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 1,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'red',
  }
});