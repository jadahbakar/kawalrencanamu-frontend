export default [
  {
    path: '/setting/company',
    name: 'setting-company',
    component: () => import('@/views/setting/SettingCompany.vue'),
    meta: {
      pageTitle: 'Company Setting',
      breadcrumb: [
        {
          text: 'Setting',
        },
        {
          text: 'Company',
          active: true,
        },
      ],
    },
  },
  {
    path: '/setting/parameter',
    name: 'setting-parameter',
    component: () => import('@/views/setting/SettingParameter.vue'),
    meta: {
      pageTitle: 'Parameter Setting',
      breadcrumb: [
        {
          text: 'Setting',
        },
        {
          text: 'Parameter',
          active: true,
        },
      ],
    },
  },
]
