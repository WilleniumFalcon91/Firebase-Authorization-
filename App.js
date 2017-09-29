import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';


export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCWlpcIuqD7FMtpmsA_dc7QhgJV1D1SEDs',
      authDomain: 'auth-581bc.firebaseapp.com',
      databaseURL: 'https://auth-581bc.firebaseio.com',
      projectId: 'auth-581bc',
      storageBucket: 'auth-581bc.appspot.com',
      messagingSenderId: '38441487098'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
