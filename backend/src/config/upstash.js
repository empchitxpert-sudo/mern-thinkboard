import {RateLimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

const ratelimit = new RateLimit({
    redis: Redis.fromEnv(),
    limiter: RateLimit.slideingWindow(5, "10 s"), // 5 requests per 10 seconds
});

export default ratelimit;