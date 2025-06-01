// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
<<<<<<< HEAD
  dsn: "https://3d627de24f5d06a1fc39000a06ca9a94@o4506813739368448.ingest.us.sentry.io/4507458386526208",

  // Adjust this value in production, or use tracesSampler for greater control
=======
  dsn: "https://d0308ee1b97a8e4d9a41e7dd1124a8e2@o4509425531879424.ingest.de.sentry.io/4509425543086160",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
>>>>>>> 8d5f408ff701f40e055380dcebca0f0c217a3522
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
