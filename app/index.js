import {
  StackNavigator,
} from 'react-navigation';
import SearchScreen from './scenes/SearchScreen';


const GitHubProjects = StackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'GitHub Search'
    }},
});

export default GitHubProjects;

