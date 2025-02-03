import {createRouter, createWebHashHistory} from 'vue-router';
import Profile from "./components/Profile.vue";
import Login from "./components/Login.vue";
import SingUp from "./components/SingUp.vue";
import BallotBoxe from './components/BallotBoxe.vue';
import DashBoard from './components/DashBoard.vue';
import Vote from './components/Vote.vue';
import YourVotes from './components/YourVotes.vue';
import BallotBoxSettings from './components/BallotBoxSettings.vue';

const routes = [
    {   path: '/API', 
        component: Login 
    },
    {   path: '/SingUp', 
        component: SingUp 
    },
    {
        path: '/Profile',
        component: Profile,
    children:[
        { path: '/Profile', component: DashBoard },
        { path: '/BallotBoxe', component: BallotBoxe },
        { path: '/YourVotes', component: YourVotes },
        { path: '/Vote', component: Vote},
        { path: 'BallotBoxSettings',
          name: 'BallotBoxSettings',
          component: BallotBoxSettings,
          props: (route) => ({idVote: route.query.idVote})
        }
    ]
 }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
