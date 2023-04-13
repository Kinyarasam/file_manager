#!/usr/bin/env node
import * as redis from 'redis';
import * as util from 'util';

class RedisClient {
	host = 'localhost'
	port = 6379

	constructor() {
		this.client = redis.createClient({ url: `redis://${this.host}:${this.port}` });
	}

	isAlive() {
		return this.client.connected;
	}

	// isReady() {
	// 	return new Promise((resolve) => {
  //     if (this.isConnected) {
  //       resolve(true);
  //     } else {
  //       this.client.once('connect', () => {
  //         this.isConnected = true;
  //         resolve(true);
  //       });

  //       this.client.once('error', () => {
  //         this.isConnected = false;
  //         resolve(false);
  //       });
  //     }
  //   });
	// }

	
}

const redisClient = new RedisClient();

module.exports = redisClient;
