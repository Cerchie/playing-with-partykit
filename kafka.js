import { Kafka } from "kafkajs";
import 'dotenv/config'

const kafka = new Kafka({
    clientId: "github-app",
    brokers: ['pkc-921jm.us-east-2.aws.confluent.cloud:9092'],
    // authenticationTimeout: 10000,
    // reauthenticationThreshold: 10000,
    ssl: true,
    sasl: {
      mechanism: 'plain', // scram-sha-256 or scram-sha-512
      username: process.env.CONFLUENT_API_KEY,
      password: process.env.CONFLUENT_API_SECRET
    },
});

export const consumer = kafka.consumer({ groupId: "github-group" });