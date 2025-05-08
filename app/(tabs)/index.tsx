import React from 'react';

import { Alert, Button, Image, StyleSheet } from 'react-native';
import { useRef, useState } from 'react';

import { Text, View } from '@/components/Themed';
import ParallaxScrollView from '@/components/ParallaxScrollView';

import {WebView} from 'react-native-webview';

import * as FileSystem from "expo-file-system";
// import * as Permissions from 'expo-permissions';

import { startActivityAsync } from "expo-intent-launcher";


import * as Linking from 'expo-linking';
import Clipboard from 'expo-clipboard';


export default function TabOneScreen() {

  const webviewRef = useRef();

  const [webviewURL, changeWebviewURL] = useState({uri: 'https://signal.org/android/apk/'});
  const [pageData, updatePageData] = useState({version: '0.0.0', hash: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', apkUrl: 'https://signal.org'})
  const [disableButton, updateDisableButton] = useState(false);
  const [forceUpdate, updateForceUpdate] = useState('111');



  const initializationCode = `window.ReactNativeWebView.postMessage('{}');`


  const copyHashToClipboard = async () => {
    await Clipboard.setStringAsync(pageData.hash);
    // setCopiedText('Signal APK Hash Copied');
  };

  function requestPageData() {
    console.log('sending request for data from page')
    // TODO: a bunch of this data needs to be cleaned
    webviewRef.current.injectJavaScript(`
      var data = {};
      data['version'] = document.querySelectorAll('h3')[1].innerText.replace('Signal ', '');
      data['oleHash'] = document.querySelectorAll('div.box p')[1].innerText
      data['hash'] = document.querySelectorAll('pre')[0].innerText;
      data['apkUrl'] = document.querySelectorAll('[value="Download"]')[0].attributes.onclick.value.split("= '")[1].split("';")[0];
      setTimeout(() => {
        window.ReactNativeWebView.postMessage(JSON.stringify(data));
      }, "1000");
    `)
  }

  async function installApk() {
    // A15 
    //content://com.android.externalstorage.documents/tree/primary/
    const apkFileName = pageData.apkUrl.split('android/')[1];
    const uri = pageData.apkUrl;

    try {

      const filename = "signal.pdf";
      let localUri = '';
      const result = await FileSystem.downloadAsync(
        pageData.apkUrl,
        FileSystem.documentDirectory + apkFileName
      ).then((finishedDownload) => {
        // location of file
        console.log(finishedDownload.uri);
        localUri = finishedDownload.uri;
        
      });

      // localUri = await FileSystem.getContentUriAsync(localUri);


      console.log('installing');
      console.log(localUri); 
      // dude forked it and that made it look newer
      
      // NativeModules.InstallApk.install(localUri);  

      
    } catch (error) {
      alert(`Error while installing APK: ${error}`);
    }

  }

  async function updateApk() {
    // TODO: Launch an alert and explain that the file path will be used somewhere 

    const apkFileName = pageData.apkUrl.split('android/')[1];
    const uri = pageData.apkUrl;
    // with secure shit this path has no chance of being allowed shit
    // const filePath  = FileSystem.documentDirectory + apkFileName;
    // console.log(filePath)

    // const localUri = await FileSystem.getContentUriAsync(filePath);

    // grants read only!
      // just pops up the folder selector 
    const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
    // TODO: How do we make this persistant? 
    // permissions.directoryUri
    if (!permissions.granted) {
        return;
        // TODO: pop an alert to shame the user and tell them to start over after closing the app
    }

    // this is the dynamic location that was granted access by the user
    const localUri = permissions.directoryUri.replace('%3A', '/') + '/';

    try {
      console.log('dl before')

      // this fails and says the localUri is not writeable
      console.log(localUri)

      // this need the permissions explored deeper 
        // 

        // trying to see what the permissions are NEED WRITE
        console.log(data)
      // await FileSystem.downloadAsync(uri, localUri);

       // reads the APK as a string to be able to write the data 
        // this does not work, duh
      // const base64 = await FileSystem.readAsStringAsync(uri, {
      //   encoding: FileSystem.EncodingType.Base64,
      // });

      // this fails too because we have read access via the SAF, not write
        // this will create a 0 byte file 
          // But fails due to the dir not being writable 
            // need to pull file permissions

      // //   
      //   .catch((e) => {
          
      //     console.log('save error', e)
      //   })
      // 
      // TODO: Verify crypto here
      console.log('crypto here')
      // await startActivityAsync("android.intent.action.ACTION_OPEN_DOCUMENT")
      // 
      console.log('installing')
      await startActivityAsync("android.intent.action.INSTALL_PACKAGE", {
        data: localUri,
        flags: 1,
      });
    } catch (error) {
      alert(`Error while installing APK: ${error}`);
    }
  }

  return (
    <View style={styles.container}>
          
      <Text style={styles.title}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">Lastest Details for Signal</Text>
      <Text style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">Version: {pageData.version}</Text>
      <Text
      style={styles.getStartedText}
      lightColor="rgba(0,0,0,0.8)"
      darkColor="rgba(255,255,255,0.8)">Hash: {pageData.hash}</Text>
      <Text
      style={styles.getStartedText}
      lightColor="rgba(0,0,0,0.8)"
      darkColor="rgba(255,255,255,0.8)">URL: {pageData.apkUrl}</Text>
      {/* <Button
          title='Copy APK Hash'
          style={styles.button}
          disabled={ pageData.version === '0.0.0'}
          onPress={() => {            
            copyHashToClipboard();
            // TODO: Notify user that it was copied 
          }}
        /> */}
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        <View style={styles.vWrap}>
          <Button
              title='Download Signal APK'
              style={styles.button}
              disabled={ (pageData.version === '0.0.0' || disableButton)}
              onPress={() => {
                updateDisableButton(true);
                // this triggers the download to the Download folder
                changeWebviewURL({uri: pageData.apkUrl})

                // tell user what to do
                // show a screen shot of where to paste the hash in apkcertify app
                Alert.alert('Downloading Signal...', 'Before installing the APK besure to verify the APK via the Appverifier app.', [{text: 'Open appverifier', onPress: () => { Linking.openURL('appverifier://app'); }}])

              }}
            />
        </View>

        {/* <Button
          title='Install Downloaded APK'
          // disabled={ (pageData.version === '0.0.0' || !disableButton)}
          onPress={() => {
            
            updateDisableButton(true);
            // this triggers the download
            // changeWebviewURL({uri: pageData.apkUrl})

            // 
            installApk();

          }}
        /> */}

        <WebView 
            ref={webviewRef}
            style={styles.wv}
            originWhitelist={['signal.org']}
            source={webviewURL} 
            injectedJavaScript= { initializationCode }
            onNavigationStateChange={(navState) => {
              // console.log(navState);
              if (!navState.loading) {
                console.log(navState);
                requestPageData();
                // the data does not always make it back so we are just gonna call it a few times
                  // otherwise it is assumed the user will close and open the app again
                setTimeout(() => {
                    requestPageData();
                    setTimeout(() => {
                      requestPageData();
                      setTimeout(() => {
                        requestPageData();
                    }, 500);
                  }, 500);
                }, 2000);
              }
            }}
            onMessage={event => {
              // console.log('message recieved')
              const messageData = event.nativeEvent.data; 
              console.log(messageData);   
              updatePageData(JSON.parse(messageData));  
            }}
            onError={(event) => {
              console.log('error')
          }}

        />
    </View>
    
  );
}

const styles = StyleSheet.create({
  wv: {
    marginTop: 500,
    height: 750,
    width: '100%',
  },
  vWrap: {
    backgroundColor: 'red',
  },
  button: {
    width: '100%',
    marginTop: 300,
    padding:15,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
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
  reactLogo: {
    height: 0,
    width: 50,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  psv: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
