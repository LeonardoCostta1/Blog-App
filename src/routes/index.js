import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Posts from '../pages/Posts';
import Detail from '../pages/Details';
import Users from '../pages/Users';
import Home from '../pages/Home';
import UserDetails from '../pages/UserDetails';

const AppNavigator = createStackNavigator({

    
    Home:{
        screen:Home,
        navigationOptions:{
            header: null
        }
    },

    Posts:{
        screen:Posts,
        navigationOptions:{
            header: null
        }
    },

    Users:{
        screen:Users,
        navigationOptions:{
            header: null
        }
    },
    Details:{
        screen:Detail,
        navigationOptions:{
            header: null
        }
    },
    UserDetails:{
        screen:UserDetails,
        navigationOptions:{
            header: null
        }
    },
},
{
    initialRouteName:'Home'
}

);

export default Routes = createAppContainer(AppNavigator);