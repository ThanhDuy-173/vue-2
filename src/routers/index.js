import VueRouter from 'vue-router';
import FormOne from '../components/FormOne.vue';
import FormTwo from '../components/FormTwo.vue';
import FormThree from '../components/FormThree.vue';
import User from '../components/User.vue';
import NotFound from '../components/NotFound.vue';
import ProfileVue from '../components/ProfileVue.vue';
import ProfileVueNew from '../components/ProfileVueNew.vue';
import PropRoute from '../components/PropRoute.vue';
import Vue from 'vue';
Vue.use(VueRouter);
const routes = [
    {name: 'one', path: '/', component: FormOne},
    {name: 'two', path: '/two', component: FormTwo},
    {name: 'three', path: '/three', component: FormThree},
    {name: 'dir', path: '/dir', redirect: '/two' },
    {name: 'dirN', path: '/dirN', redirect: { name: 'three' }},
    {name: 'dirNN', path: '/dirNN', redirect: { name: 'dir' }},
    { path: '/testDir', redirect: to => {
        console.log('to Dir', to)
    }},
    { path: '/user3', component: ProfileVue, alias: '/user/3' },
    {
        name: 'user', 
        path: '/user/:id', 
        component: User,
        children: [
            {path: '', component: ProfileVueNew},
            {path: 'profile', component: ProfileVue}
        ]
    },
    {name: 'props', path: '/props/:id', component: PropRoute, props: true},
    // {
    //   path: '/user/:id',
    //   components: {
    //     default: User,
    //     sidebar: Sidebar
    //   },
    //   props: {
    //     default: true,
    //     // function mode, more about it below
    //     sidebar: route => ({ search: route.query.q })
    //   }
    // },
    // Search
    // {
    //   path: '/search',
    //   component: SearchUser,
    //   props: route => ({ query: route.query.q })
    // }
    {name: 'notFound', path: '/:catchAll(.*)', component: NotFound}
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        console.table({to, from, savedPosition})
        console.log('savedPosition', savedPosition)
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    console.log('beforeEach');
    console.table({to: to, from: from});
    next();
})
router.afterEach((to, from) => {
    console.log('afterEach');
    console.table({to: to, from: from});
})

export default router