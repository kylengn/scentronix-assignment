export const NAVIGATIONS = [
  {
    name: 'Shop',
    path: '/',
    children: [
      {
        name: 'Products',
        path: '/products'
      },
      {
        name: 'Sale',
        path: '/sale'
      }
    ]
  },
  {
    name: 'Recipes',
    path: '/recipes',
    children: [
      {
        name: 'Categories',
        path: '/categories'
      },
      {
        name: 'Collections',
        path: '/collections'
      },
      {
        name: 'Resources',
        path: '/resources'
      }
    ]
  },
  {
    name: 'Learn',
    path: '/learn',
    children: [
      {
        name: 'About',
        path: '/about'
      },
      {
        name: 'Contact',
        path: '/contact'
      },
      {
        name: 'FAQ',
        path: '/faq'
      },
      {
        name: 'Privacy Policy',
        path: '/privacy-policy'
      },
      {
        name: 'Terms & Conditions',
        path: '/terms-conditions'
      }
    ]
  },
  {
    name: 'Blog',
    path: '/blog',
    children: [
      {
        name: 'Posts',
        path: '/posts'
      },
      {
        name: 'Authors',
        path: '/authors'
      }
    ]
  }
]
