import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';
import { initializeApp } from 'firebase/app';
import messaging from '@react-native-firebase/messaging';


    /*    
    
    * TO INSTALL ANDROID *
    1. command: npx expo run:android

    * TO IMPLEMENTS WEBVIEW APP SUPPORTING PUSH NOTIFACTION *
    1. get Native Device Token;
    2. store Token at AsyncStorage;
    option.1. send token using InjectedJavascripts 
    = injectedJavaScript='sendToken(devicetoken)'      
    option.2. send token using querystring
    = https://www.choeaecafe.com?devicetoken={devicetoken}

    should know:: Webview Compoennts can't issue token and doesn't support push api
    so recommended to develop communication native clinet and webView

    */

    
export default function App() {


    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    
      if (enabled) {
        console.log('Authorization status:', authStatus);
      }
    }

    const getToken = async() =>{
        // const token = await messaging().getToken();
        // console.log("token = ",token)  
        console.log('token')
    }

    useEffect(()=>{
        requestUserPermission();
        getToken();
    },[])

  return (
    <WebView
      source={{ uri: 'choeaecafe.com' }}
      style={{ flex: 1, marginTop: 30 }}
    />
  );
}

// import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "./firebaseConfig.js";

// export default function App() {
//     function signUp() {
//         const auth = getAuth(app);

//         createUserWithEmailAndPassword(
//             auth,
//             "junemuk10@gmail.com",
//             "junmugo0220"
//         )
//             .then((res) => console.log(res))
//             .catch((err) => console.log(err));
            
//     }

//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Check For Firebase Integration!</Text>

//                 <TouchableOpacity style={styles.button_container} onPress={signUp}>
//                 <Text style={styles.button_text}>SignUp</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         marginTop: 48,
//     },
//     text: {
//         fontWeight:"bold",
//         textAlign:"center",
//         fontSize:24,
//     },
//     button_text: {
//         textAlign:"center",
//         fontSize:24,
//         color:"#1976d2"
//     },
//     button_container: {
//         borderRadius: 15,
//         flexDirection: "row",
//         margin: 16,
//         padding:24,
//         justifyContent:"center",
//         backgroundColor:"#e6e6e6"
//     },
// });