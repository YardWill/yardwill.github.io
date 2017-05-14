import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

const $title = document.querySelector('#title');
const $list = document.querySelector('#list');

const User = { template: '<div>User {{ $route.params.id }}</div>' };
const index = { template: `<div id="contain">
                <header>
                    <h1 id="titles">Yard's Blog</h1>
                </header>
            </div>` };

const list = [
    '/user/foo',
    '/user/foo',
    '/user/foo',
    '/user/foo',
    '/user/foo',
    '/user/foo',
    '/user/foo',
    '/user/foo',
    '/user/foo',
];

$list.innerHTML = list.map(e => `
    <div>
        <router-link to="${e}"><p>1</p><p>12</p></router-link>
    </div>
`).join(' ');

const routes = [
    { path: '/', component: index },
    { path: '/user/:id', component: User },
];

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
}).$mount('#app');

Vue.config.devtools = true;
