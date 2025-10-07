
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://janegayacao.github.io/JaneDesignLab/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/JaneDesignLab"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2132, hash: 'b81a0e45965e6399b78304944283f1f16de2414ef689afc9744cc3e3603ff774', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2365, hash: '47fd02277ac0f2ec75b4f03a98d2c994b35b034ba4f32c0de23f977eb89b31a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3099, hash: '558497244ac55ce910b763815dd6c398754d1d929f39c2b508428a66a22bdb8d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-K52SKEXZ.css': {size: 667, hash: 'DZapHy1AceA', text: () => import('./assets-chunks/styles-K52SKEXZ_css.mjs').then(m => m.default)}
  },
};
