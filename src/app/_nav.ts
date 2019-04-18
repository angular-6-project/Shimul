export const navItems = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  {
    name: 'Master',
    url: '/master',
    icon: 'icon-cursor',
    children: [
      {
        name: 'product',
        url: '/master/listProduct',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'packet',
        url: '/master/listPacket',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'contractor',
        url: '/master/listContractor',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'salesman',
        url: '/master/listSalesman',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'bank',
        url: '/master/listBank',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'officer',
        url: '/master/listOfficer',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'tcd',
        url: '/master/listTcd',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'acd',
        url: '/master/listAcd',
        icon: 'icon-basket-loaded'
      },
      {
        name: 'listProductTaxes',
        url: '/master/ListProductTaxesComponent',
        icon: 'icon-basket-loaded'
      }
    ]
  },
  {
    name: 'User Mangement',
    url: '/users',
    icon: 'icon-user',
    children: [
      {
        name: 'User',
        url: '/users/listUser',
        icon: 'fa fa-user-circle-o fa-lg '
      },
      {
        name: 'Role',
        url: '/users/listRole',
        icon: 'icon-people'
      },
      {
        name: 'Permissions',
        url: '/users/listPermissions',
        icon: 'fa fa-key fa-lg'
      }

    ]
  },
  {
    title: true,
    name: 'Sales'
  },
  {
    name: 'Daily Indent',
    url: '/dailyIndent',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Record Indent',
        url: '/dailyIndent/recordIndent',
        icon: 'icon-basket-loaded'
      }
    ]
  },
  {
    name: 'FGS Transaction',
    url: '/transaction',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Products Receipts',
        url: '/transaction/receipts',
        icon: 'icon-drop'
      }
    ]
  }
];
