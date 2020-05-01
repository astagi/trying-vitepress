import Layout from './Layout.vue'

export default {
  Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app, router, siteData }) {}
}
