export default [
  {
    path: '/short-term-plan/dashboard',
    name: 'short-term-plan-dashboard',
    component: () => import('@/views/short-term-plan/ShortTermPlanDashboard.vue'),
    meta: {
      pageTitle: 'Short Term Plan Dashboard',
      breadcrumb: [
        {
          text: 'Short Term Plan',
        },
        {
          text: 'Dashboard',
          active: true,
        },
      ],
    },
  },
  {
    path: '/short-term-plan/new',
    name: 'short-term-plan-new',
    component: () => import('@/views/short-term-plan/ShortTermPlanNew.vue'),
    meta: {
      pageTitle: 'Short Term Plan New',
      breadcrumb: [
        {
          text: 'Short Term Plan',
        },
        {
          text: 'New',
          active: true,
        },
      ],
    },
  },
  {
    path: '/short-term-plan/changes',
    name: 'short-term-plan-changes',
    component: () => import('@/views/short-term-plan/ShortTermPlanChanges.vue'),
    meta: {
      pageTitle: 'Short Term Plan Changes',
      breadcrumb: [
        {
          text: 'Short Term Plan',
        },
        {
          text: 'Changes',
          active: true,
        },
      ],
    },
  },
  {
    path: '/short-term-plan/monitoring',
    name: 'short-term-plan-monitoring',
    component: () => import('@/views/short-term-plan/ShortTermPlanMonitoring.vue'),
    meta: {
      pageTitle: 'Short Term Plan Monitoring',
      breadcrumb: [
        {
          text: 'Short Term Plan',
        },
        {
          text: 'Monitoring',
          active: true,
        },
      ],
    },
  },
]
