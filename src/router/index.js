import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Layout',
    redirect: 'moonBeamLeaderBoard',
    component: () =>
        import ('@/views/Layout'),
    children: [{
        path: 'moonBeamLeaderBoard',
        name: 'moonBeamLeaderBoard',
        component: () =>
            import ('@/views/moonBeam/moonBeamLeaderBoard')
    }],
}, ]

const router = new VueRouter({
    routes
})

export default router