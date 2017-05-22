'use strict'
const Config = require('electron-config')
const {homedir} = require('os')

const configDir = homedir()

const appConfig = new Config({
  defaults: {
    interval: 25,
    breakInterval: 5,
    shortcuts: {
      showWindow: 'CommandOrControl+Alt+T',
      startTimer: 'Enter',
      hideWindow: 'Escape'
    }
  },
  name: `${configDir}/.tom`
})

exports.config = appConfig

exports.setConfig = function setConfig (config, {state}) {
  return {
    config: Object.assign({}, state.config, config)
  }
}
