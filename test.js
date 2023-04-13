#!/usr/bin/env node
const redis = require('redis')

const host = 'localhost'
const port = '6379'

const client = redis.createClient({
	url: `redis://${host}:${port}`
});

client.on('error', (err) => {
  // console.log(err.message)
})

client.on('connect', () => {
	console.log('connected')
	console.log(client.connected)
})

client.on('quit', () => {
	console.log('Exited!!!')
})



