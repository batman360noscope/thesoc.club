import {PrismaClient} from "@prisma/client";

/* eslint-disable no-var */
declare global {
    var prisma: null | PrismaClient;

    namespace NodeJS {
        interface ProcessEnv {
            // Typically set by netlify CI
            NETLIFY?: "true" | "false";
            BRANCH?: string;
            PULL_REQUEST?: "true" | "false";

            // Set by external sources. Should default to prod if unset.
            URL: string;

            // Application configuration
            POSTGRES_URI: string;

            // OAuth, see: https://console.cloud.google.com/apis/credentials
            GOOGLE_ID?: string;
            GOOGLE_SECRET: string;
            DEBUG_AUTH?: "true" | "false"; // Enable extra debug logs from the authentication framework
        }
    }
}
/* eslint-enable */

export {};
