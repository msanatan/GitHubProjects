import {
  StackNavigator,
} from 'react-navigation';
import SearchScreen from './scenes/SearchScreen';
import RepoViewScreen from './scenes/RepoViewScreen';

const GitHubProjects = StackNavigator({
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      title: 'GitHub Search'
    }},
  RepoView: {
    screen: RepoViewScreen
  },
});

export default GitHubProjects;

