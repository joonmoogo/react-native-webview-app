import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import messaging from '@react-native-firebase/messaging'
import WebView from 'react-native-webview';
import { initializeApp } from 'firebase/app';

export default function App() {

  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    //  remoteMessage.data로 메세지에 접근가능
    //  remoteMessage.from 으로 topic name 또는 message identifier
    //  remoteMessage.messageId 는 메시지 고유값 id
    //  remoteMessage.notification 메시지와 함께 보내진 추가 데이터
    //  remoteMessage.sentTime 보낸시간
  });


  // Foreground 상태인 경우
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
    return unsubscribe;
  });

  return (
    <WebView
      source={{ uri: 'test.choeaecafe.com' }}
      style={{ flex: 1, marginTop: 30 }}
    />
    /* 
      TO IMPLEMENTS WEBVIEW APP SUPPORTING PUSH NOTIFACTION

      1. get Native Device Token;
      2. store Token at AsyncStorage;
      option.1. send token using InjectedJavascripts 
      = injectedJavaScript='sendToken(devicetoken)'      
      option.2. send token using querystring
      = https://www.choeaecafe.com?devicetoken={devicetoken}


      should know:: Webview Compoennts can't issue token and doesn't support push api
      so recommended to develop communication native clinet and webView

    */
  );
}