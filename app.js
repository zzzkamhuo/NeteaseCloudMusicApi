#!/usr/bin/env node

async function start() {
  // await generateConfig()
  require('./server').serveNcmApi({
    checkVersion: true,
  })
}
start()
