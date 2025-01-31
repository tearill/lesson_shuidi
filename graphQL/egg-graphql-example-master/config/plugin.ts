import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  graphql: {
    enable: true,
    package: '@switchdog/egg-graphql'
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs'
  },
  axios: {
    enable: true,
    package: 'axios'
  }
};

export default plugin;
