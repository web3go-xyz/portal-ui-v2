import { createRouter, createWebHashHistory } from 'vue-router'

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

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router