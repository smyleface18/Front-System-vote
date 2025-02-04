import {createRouter, createWebHashHistory} from 'vue-router';
import Profile from "./components/Profile.vue";
import Login from "./components/Login.vue";
import SingUp from "./components/SingUp.vue";
import BallotBoxe from './components/BallotBoxe.vue';
import DashBoard from './components/DashBoard.vue';
import Vote from './components/Vote.vue';
import YourVotes from './components/YourVotes.vue';
import BallotBoxSettings from './components/BallotBoxSettings.vue';
import Swal from 'sweetalert2';
import DocumentationApi from './components/DocumentationApi.vue';

const routes = [
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
    ],
    meta: {
        requiresAuth: true
    }
 },
 {
    path : '/DocumentationApi',
    component: DocumentationApi,
    meta: {
        requiresAuth: false
    }
 }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to,from, next) => {
    if(to.meta.requiresAuth){
        console.log(to)
        console.log("entro")
        if(localStorage.getItem("token") === ""){
            Swal.fire({
                title: 'Error!',
                text: 'Your session is no longer valid, log in again',
                icon: 'error',
                confirmButtonText: 'ok'
              }).then((result) =>{
                window.location.href = '/index.html#/Login';
              })
        }else{
            next()
        }
    } else {
        next()
    }
})
export default router;
