
export default {
  basePath: 'https://janegayacao.github.io/JaneDesignLab',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
