import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import UserFormScreen from '../screens/UserFormScreen';
import QuizListScreen from '../screens/QuizListScreen';

const NavigationStack = createStackNavigator(
  {
    Home:  HomeScreen,
    UserForm: UserFormScreen,
    QuizList: QuizListScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default NavigationStack;