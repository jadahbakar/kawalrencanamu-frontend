export default [
  {
    path: '/middle-term-plan/dashboard',
    name: 'middle-term-plan-dashboard',
    component: () => import('@/views/middle-term-plan/MiddleTermPlanDashboard.vue'),
    meta: {
      pageTitle: 'middle Term Plan Dashboard',
      breadcrumb: [
        {
          text: 'middle Term Plan',
        },
        {
          text: 'Dashboard',
          active: true,
        },
      ],
    },
  },
  {
    path: '/middle-term-plan/new',
    name: 'middle-term-plan-new',
    component: () => import('@/views/middle-term-plan/MiddleTermPlanNew.vue'),
    meta: {
      pageTitle: 'middle Term Plan New',
      breadcrumb: [
        {
          text: 'middle Term Plan',
        },
        {
          text: 'New',
          active: true,
        },
      ],
    },
  },
  {
    path: '/middle-term-plan/changes',
    name: 'middle-term-plan-changes',
    component: () => import('@/views/middle-term-plan/MiddleTermPlanChanges.vue'),
    meta: {
      pageTitle: 'middle Term Plan Changes',
      breadcrumb: [
        {
          text: 'middle Term Plan',
        },
        {
          text: 'Changes',
          active: true,
        },
      ],
    },
  },
  {
    path: '/middle-term-plan/monitoring',
    name: 'middle-term-plan-monitoring',
    component: () => import('@/views/middle-term-plan/MiddleTermPlanMonitoring.vue'),
    meta: {
      pageTitle: 'middle Term Plan Monitoring',
      breadcrumb: [
        {
          text: 'middle Term Plan',
        },
        {
          text: 'Monitoring',
          active: true,
        },
      ],
    },
  },
]
