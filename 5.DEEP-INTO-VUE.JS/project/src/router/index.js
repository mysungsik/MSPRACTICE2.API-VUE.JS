import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () =>
      import(
        /* webpackChunkName: "DataBinding" */ '../views/1_Databinding/DataBindingStringView.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () =>
      import(
        /* webpackChunkName: "DataBinding" */ '../views/1_Databinding/DataBindingHtmlView.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () =>
      import(
        /* webpackChunkName: "DataBinding" */ '../views/1_Databinding/DataBindingInputView.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () =>
      import(
        /* webpackChunkName: "DataBinding" */ '../views/1_Databinding/DataBindingSelectView.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () =>
      import(
        /* webpackChunkName: "DataBinding" */ '../views/1_Databinding/DataBindingAttributeView.vue'
      )
  },
  {
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () =>
      import(
        /* webpackChunkName: "DataBinding" */ '../views/1_Databinding/DataBindingListView.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClassStyleView',
    component: () =>
      import(
        /* webpackChunkName: "DataBinding" */ '../views/1_Databinding/DataBindingClassStyleView.vue'
      )
  },
  {
    path: '/databinding/click',
    name: 'EventView',
    component: () =>
      import(
        /* webpackChunkName: "EventListenal" */ '../views/2_EventListenal/EventClickView.vue'
      )
  },
  {
    path: '/databinding/key',
    name: 'EventView',
    component: () =>
      import(
        /* webpackChunkName: "EventListenal" */ '../views/2_EventListenal/EventKeyView.vue'
      )
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
