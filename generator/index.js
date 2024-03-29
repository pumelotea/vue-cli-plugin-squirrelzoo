function renderFiles(api, opts) {

  const fs = require('fs')

  // 通过preset的形式配置opts.router，这里则不需要
  // const routerPath = api.resolve('./src/router.js')
  // opts.router = opts.router || fs.existsSync(routerPath)

  const filesToDelete = [
    'src/assets/logo.png',
    'src/views/About.vue',
    'src/views/Home.vue',
    'src/components/HelloWorld.vue',
  ]

  // console.log('\n[custom-tpl plugin tips]\n \t GeneratorAPI options:', opts)

  if (opts.replaceTemplates) {
    // https://github.com/vuejs/vue-cli/issues/2470
    api.render(files => {
      Object.keys(files)
        .filter(name => filesToDelete.indexOf(name) > -1)
        .forEach(name => delete files[name])
    })
    api.render('./templates/base')
  }
}

function addDependencies(api) {
  api.extendPackage({
    scripts: {
      "build-prod": "vue-cli-service build",
      "build-test": "vue-cli-service build --mode=test --dest=dist-test",
    },
    dependencies: {
      "axios": "^0.18.0",
      "core-js": "^2.6.5",
      "cropperjs": "^1.5.1",
      "jsbarcode": "^3.11.0",
      "mand-mobile": "^2.5.1",
      "normalize.css": "^8.0.0",
      "qrcode": "^1.3.3",
      "url-search-params-polyfill": "^6.0.0",
      "vconsole": "^3.3.0",
      "vue": "^2.6.10",
      "vue-router": "^3.0.1",
      "vue-scroller": "^2.2.4",
      "vuex": "^3.0.1"
    },
    devDependencies: {
      "@babel/polyfill": "^7.6.0",
      "@vue/eslint-config-standard": "^4.0.0",
      "@vue/cli-plugin-babel": "^4.0.4",
      "@vue/cli-plugin-eslint": "^4.0.4",
      "@vue/cli-service": "^4.0.4",
      "babel-eslint": "^10.0.1",
      "babel-plugin-import": "^1.8.0",
      "babel-plugin-transform-remove-console": "^6.9.4",
      "eslint": "^5.8.0",
      "eslint-plugin-vue": "^5.0.0",
      "filemanager-webpack-plugin": "^2.0.5",
      "nib": "^1.1.2",
      "postcss-pxtorem": "^4.0.1",
      "poststylus": "^1.0.0",
      "squirrelzoo-build-plugin": "^1.0.1",
      "stylus": "^0.54.5",
      "stylus-loader": "^3.0.2",
      "vue-cli-plugin-mand": "^0.4.1",
      "vue-template-compiler": "^2.6.10"
    }
  })
}

module.exports = (api, options, rootOpts) => {
  options.BASE_URL = '<%= BASE_URL %>'
  options.VUE_APP_BUILD_TIME = '<%= VUE_APP_BUILD_TIME %>'
  options.VUE_APP_BUILD_VER = '<%= VUE_APP_BUILD_VER %>'
  options.VUE_APP_BUILD_REPO_VER = '<%= VUE_APP_BUILD_REPO_VER %>'
  options.projectName = api.generator.originalPkg.name


  addDependencies(api)
  renderFiles(api, options)
}
