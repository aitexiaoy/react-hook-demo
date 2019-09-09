/* eslint-disable */
import React from 'react'
import Loadable from 'react-loadable'
import Loading from './loading'


const lazyload = (loader) => {
    return Loadable({
        loader: () => loader,
        loading: Loading
    });
}

const modules = [
    {
        key: 'hoc-dome',
        path: '/hoc-demo',
        name: '高阶测试',
        component: () => lazyload(import('./hoc-demo'))
    },
    {
        key: 'use-state',
        path: '/use-state',
        name: 'useState',
        component: () => lazyload(import('./use-state')) 
    },
    {
        key: 'use-effect',
        path: '/use-effect',
        name: 'useEffect',
        component: () => lazyload(import('./use-effect')) 
    },
    {
        key: 'use-ref',
        path: '/use-ref',
        name: 'useRef',
        component: () => lazyload(import('./use-ref')) 
    },
    {
        key: 'use-layout-effect',
        path: '/use-layout-effect',
        name: 'useLayoutEffect',
        component: () => lazyload(import('./use-layout-effect')) 
    },
    {
        key: 'use-render',
        path: '/use-render',
        name: 'useRender',
        component: () => lazyload(import('./use-render')) 
    },
    {
        key: 'use-context',
        path: '/use-context',
        name: 'useContext',
        component: () => lazyload(import('./use-context')) 
    },
    {
        key: 'use-memo',
        path: '/use-memo',
        name: 'useMemo',
        component: () => lazyload(import('./use-memo')) 
    },
    {
        key: 'use-imperative-handle',
        path: '/use-imperative-handle',
        name: 'useImperativeHandle',
        component: () => lazyload(import('./use-imperative-handle')) 
    },
    {
        key: 'use-state-share',
        path: '/use-state-share',
        name: 'useStateShare',
        component: () => lazyload(import('./use-state-share')) 
    },
    {
        key: 'use-store',
        path: '/use-store',
        name: 'useStore',
        component: () => lazyload(import('./use-store')) 
    },
]

export default modules
