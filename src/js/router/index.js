import Vue from 'vue'
import Router from 'vue-router'
import C001 from "@/components/C001"
import Main from "@/components/Main"
import C002 from "@/components/C002"
import C003 from "@/components/C003"
import A001 from "@/components/A001"
import A002 from "@/components/A002"
import A003 from "@/components/A003"
import A004 from "@/components/A004"
Vue.use(Router);
export default new Router({
  routes: [
    {
      path:'/C001',
      name:'C001',
      component:C001
    },
    {
      path: '/',
      component: Main,
      children: [
        {
          path:'C002',
          name:'C002',
          component:C002
        },
        {
          path:'C003',
          name:'C003',
          component:C003
        },
        {
          path:'A001',
          name:'A001',
          component:A001
        },
        {
          path:'A002',
          name:'A002',
          component:A002
        },
        {
          path:'A003',
          name:'A003',
          component:A003
        },
        {
          path:'A004',
          name:'A004',
          component:A004
        },
      ]
    },
  ]
})
