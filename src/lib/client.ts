import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "practice-yt",
  apiKey: process.env.API_KEY || "",
});
