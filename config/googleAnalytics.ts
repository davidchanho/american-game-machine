import GA4React from "ga-4-react";

const ga4react = new GA4React(process.env.GOOGLE_ANALYTICS, {}, [], 5000);

ga4react.initialize().then(
  (ga4) => {
    ga4.pageview("path");
    ga4.gtag("event", "pageview", "path");
  },
  (err) => {
    console.error(err);
  }
);
