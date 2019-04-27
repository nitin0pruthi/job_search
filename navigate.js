import {createBottomTabNavigator, createAppContainer, createStackNavigator} from 'react-navigation';
import AuthScreen from './src/screens/authScreen';
import WelcomeScreen from './src/screens/welocmeScreen';
import MapScreen from './src/screens/mapScreen';
import DeckScreen from './src/screens/deckScreen';
import ReviewScreen from './src/screens/reviewScreen';
import SettingScreen from './src/screens/settingScreen';

const MainNavigator = createBottomTabNavigator({
    welcome: {screen: WelcomeScreen},
    auth:{screen: AuthScreen},
    main:{
      screen: createBottomTabNavigator({
        map :{screen:MapScreen},
        deck: {screen: DeckScreen},
        review:{
          screen: createStackNavigator({
            review:{screen:ReviewScreen},
            setting:{screen:SettingScreen}
          })
        }
      })
    }
  },{
  navigationOptions:{
      tabBarVisible : false
    }
    
  });

   const Nav = createAppContainer(MainNavigator);

 export default Nav;