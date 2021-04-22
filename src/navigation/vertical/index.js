export default [
  {
    title: 'Home',
    route: 'home',
    icon: 'HomeIcon',
  },
  {
    title: 'Vision, Mission & Value',
    route: 'vision-mission-value',
    icon: 'TargetIcon',
  },
  {
    title: 'Long Term Plan',
    icon: 'ClipboardIcon',
    children: [
      {
        title: 'Dashboard',
        route: 'long-term-plan-dashboard',
      },
      {
        title: 'New',
        route: 'long-term-plan-new',
      },
      {
        title: 'Changes',
        route: 'long-term-plan-changes',
      },
      {
        title: 'Monitoring',
        route: 'long-term-plan-monitoring',
      },
    ],
  },
  {
    title: 'Middle Term Plan',
    icon: 'ClipboardIcon',
    children: [
      {
        title: 'Dashboard',
        route: 'middle-term-plan-dashboard',
      },
      {
        title: 'New',
        route: 'middle-term-plan-new',
      },
      {
        title: 'Changes',
        route: 'middle-term-plan-changes',
      },
      {
        title: 'Monitoring',
        route: 'middle-term-plan-monitoring',
      },
    ],
  },
  {
    title: 'Short Term Plan',
    icon: 'ClipboardIcon',
    children: [
      {
        title: 'Dashboard',
        route: 'short-term-plan-dashboard',
      },
      {
        title: 'New',
        route: 'short-term-plan-new',
      },
      {
        title: 'Changes',
        route: 'short-term-plan-changes',
      },
      {
        title: 'Monitoring',
        route: 'short-term-plan-monitoring',
      },
    ],
  },
  {
    title: 'Setting',
    icon: 'SettingsIcon',
    children: [
      {
        title: 'Company',
        route: 'setting-company',
      },
      {
        title: 'Parameter',
        route: 'setting-parameter',
      },
    ],
  },
]
