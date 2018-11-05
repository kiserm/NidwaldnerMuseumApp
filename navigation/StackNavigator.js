import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import UserFormScreen from '../screens/UserFormScreen';
import QuizListScreen from '../screens/QuizListScreen';
import FestungHomeScreen from '../screens/FestungHomeScreen';
import SalzmagazinHomeScreen from '../screens/SalzmagazinHomeScreen';
import WinkelriedhausHomeScreen from '../screens/WinkelriedhausHomeScreen';
import SalzmagazinStation1FrageScreen from '../screens/SalzmagazinStation1FrageScreen';
import SalzmagazinStation1AnswerScreen from '../screens/SalzmagazinStation1AnswerScreen';
import SalzmagazinStation2QuestionScreen from '../screens/SalzmagazinStation2QuestionScreen';





const NavigationStack = createStackNavigator(
  {
    Home:  HomeScreen,
    UserForm: UserFormScreen,
    QuizList: QuizListScreen,
    FestungHome: FestungHomeScreen,
    SalzmagazinHome: SalzmagazinHomeScreen,
    WinkelriedhausHome: WinkelriedhausHomeScreen,
    SalzmagazinStation1Frage: SalzmagazinStation1FrageScreen,
    SalzmagazinStation1Answer: SalzmagazinStation1AnswerScreen,
    SalzmagazinStation2Question: SalzmagazinStation2QuestionScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default NavigationStack;