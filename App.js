import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  Image
} from "react-native";
import {
  StackNavigator,
} from 'react-navigation';

import OnBoarding from './src/comp/OnBording';
import Login from './src/comp/Login'




const OnBoardingRoutes = StackNavigator({
  OnBoarding:
  {
    screen: OnBoarding,
    navigationOptions: {
      header: null,
    }
  },
  Login:
  {
    screen: Login,
    navigationOptions: { 
      header: null,
      gesturesEnabled: true,
    },

  },
},
  {
    initialRouteName: 'OnBoarding'  
  }
);


const LoginStack = StackNavigator({
  OnBoarding:
  {
    screen: OnBoarding,
    navigationOptions: {
      header: null,
    }
  },
  Login:
  {
    screen: Login,
    navigationOptions: { 
      header: null,
      gesturesEnabled: true,
    },
  
  },
},
  {
    initialRouteName: 'Login'  
  }
);



//const video = new Videos();

export default class App extends Component {
  constructor(props) {
    super(props);
   
  }
 
  render() {
    return (
     <LoginStack />       
    );
  }
}
