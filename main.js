import redisClient from './utils/redis';

(async () => {
	console.log(redisClient.isAlive());
})();