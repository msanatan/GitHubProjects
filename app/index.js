import {
  StackNavigator,
} from 'react-navigation';
import SearchScreen from './scenes/SearchScreen';


const GitHubProjects = StackNavigator({
  Search: { screen: SearchScreen },
});

export default GitHubProjects;

