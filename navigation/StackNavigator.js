import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import UserFormScreen from '../screens/UserFormScreen';
import QuizListScreen from '../screens/QuizListScreen';
import FestungHomeScreen from '../screens/FestungHomeScreen';
import SalzmagazinHomeScreen from '../screens/SalzmagazinHomeScreen';
import WinkelriedhausHomeScreen from '../screens/WinkelriedhausHomeScreen';


const NavigationStack = createStackNavigator(
  {
    Home:  HomeScreen,
    UserForm: UserFormScreen,
    QuizList: QuizListScreen,
    FestungHome: FestungHomeScreen,
    SalzmagazinHome: SalzmagazinHomeScreen,
    WinkelriedhausHome: WinkelriedhausHomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default NavigationStack;