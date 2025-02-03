import { createRouter, createWebHashHistory } from 'vue-router';
import DashBoard from './components/DashBoard.vue';
import BallotBoxe from './components/BallotBoxe.vue';
import BallotBoxSettings from './components/BallotBoxSettings.vue';
import Vote from './components/Vote.vue'

const routes = [
  { path: '/', component: DashBoard },
  { path: '/BallotBoxe', component: BallotBoxe },
  { path: '/BallotBoxSettings', component: BallotBoxSettings },
  { path: '/Vote', component: Vote}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
