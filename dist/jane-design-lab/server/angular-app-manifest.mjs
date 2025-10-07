
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/JaneDesignLab/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/JaneDesignLab"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 507, hash: 'bfc06bb7b51dfb1f5ae912b33bf5bcae487e010e49499a9fe99704f7d4191f0f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'd52b81666e969f0d6ae69aa35673601d980d2e86cca70d881d2ba1d68db322a4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 21639, hash: '0eda3b84a4b7e2a4f95d0d583a8eecec57854c7675776eb5ab21c0b25b747352', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
