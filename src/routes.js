import users from './components/users-display.vue';
import userInfo from './components/user-info.vue';
import newUser from './components/user-new.vue';

import clients from './components/clients-display.vue';
import clientInfo from './components/client-info.vue';
import newClient from './components/client-new.vue';

import units from './components/units-display.vue';
import unitInfo from './components/unit-info.vue';
import newUnit from './components/unit-new.vue';

export default[
  {
    name:'users',
    path:'/users',
    component: users
  },
  {
    name:'newUser',
    path:'/users/new',
    component: newUser
  },
  {
    name:'userInfo',
    path:'/users/:id',
    component: userInfo
  },


  {
    name:'clients',
    path:'/clients',
    component: clients
  },
  {
    name:'newClient',
    path:'/clients/new',
    component: newClient
  },
  {
    name:'clentInfo',
    path:'/clients/:id',
    component: clientInfo
  },


  {
    name:'units',
    path:'/units',
    component: units
  },
  {
    name:'newUnit',
    path:'/units/newunit',
    component: newUnit
  },
  {
    name:'unitInfo',
    path:'/units/:id',
    component: unitInfo
  },


  ]
