import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'Layout',
    redirect: 'moonBeamLeaderBoard',
    component: () =>
        import('@/views/Layout'),
    children: [{
        path: 'moonBeamLeaderBoard',
        name: 'moonBeamLeaderBoard',
        component: () =>
            import('@/views/moonBeam/moonBeamLeaderBoard')
    }, {
        path: 'moonBeamMyStake',
        name: 'moonBeamMyStake',
        component: () =>
            import('@/views/moonBeam/moonBeamMyStake')
    }],
},]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router