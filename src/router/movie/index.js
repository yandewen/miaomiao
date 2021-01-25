export default {
    path: '/movie',
    component: () => import('@/views/movie'),
    children :[
        {
            path:'city',
            component:()=>import('@/components/city')
        },
        {
            path:'nowstaring',
            component:()=>import('@/components/nowstaring')
        },
        {
            path:'comingsoon',
            component:()=>import('@/components/comingsoon')
        },
        {
            path:'search',
            component:()=>import('@/components/search')
        },
        {
            path :'/movie',
            redirect:'/movie/nowstaring'
        }
    ]
}