// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
// import App from './App'

// Vue.config.productionTip = false

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })



import 'babel-polyfill';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import { AppContainer } from 'react-hot-loader'

const root = document.createElement('div')
document.body.appendChild(root)
ReactDOM.render(<App />, root)