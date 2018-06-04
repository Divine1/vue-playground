import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import Method from './components/Method.vue';
import Home from './components/Home.vue';
import DynamicRoute from './components/DynamicRoute.vue';


export const routes = [
    {
        path: '/computed',
        component: Computed
    },
    {
        path: '/watch',
        component: Watch
    },
    {
        path: '/dynamic/:id',
        component: DynamicRoute
    },
    {
        path: '/method',
        component: Method
    },
    {
        path: '',
        component: Home
    }
];