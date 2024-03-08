import { consumer } from "./kafka.js";

(async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "github-pull_requests", fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ message }) => {
            console.log('Received', JSON.parse(message.value.toString()));
        },
    })
})()