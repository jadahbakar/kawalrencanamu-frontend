export default [
  {
    path: '/long-term-plan/dashboard',
    name: 'long-term-plan-dashboard',
    component: () => import('@/views/long-term-plan/LongTermPlanDashboard.vue'),
    meta: {
      pageTitle: 'Long Term Plan Dashboard',
      breadcrumb: [
        {
          text: 'Long Term Plan',
        },
        {
          text: 'Dashboard',
          active: true,
        },
      ],
    },
  },
  {
    path: '/long-term-plan/new',
    name: 'long-term-plan-new',
    component: () => import('@/views/long-term-plan/LongTermPlanNew.vue'),
    meta: {
      pageTitle: 'Long Term Plan New',
      breadcrumb: [
        {
          text: 'Long Term Plan',
        },
        {
          text: 'New',
          active: true,
        },
      ],
    },
  },
  {
    path: '/long-term-plan/changes',
    name: 'long-term-plan-changes',
    component: () => import('@/views/long-term-plan/LongTermPlanChanges.vue'),
    meta: {
      pageTitle: 'Long Term Plan Changes',
      breadcrumb: [
        {
          text: 'Long Term Plan',
        },
        {
          text: 'Changes',
          active: true,
        },
      ],
    },
  },
  {
    path: '/long-term-plan/monitoring',
    name: 'long-term-plan-monitoring',
    component: () => import('@/views/long-term-plan/LongTermPlanMonitoring.vue'),
    meta: {
      pageTitle: 'Long Term Plan Monitoring',
      breadcrumb: [
        {
          text: 'Long Term Plan',
        },
        {
          text: 'Monitoring',
          active: true,
        },
      ],
    },
  },
]
