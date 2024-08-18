import CMS from "@staticcms/core";
import React, { useEffect } from "react";
import config from "./config";

import "@staticcms/core/dist/main.css";

const CMSView = () => {
  useEffect(() => {
    const root = document.getElementById("cms");
    if (root) {
      return;
    }

    CMS.init({ config });

    CMS.registerPreviewStyle("/styles/content.module.css");

    CMS.registerAdditionalLink({
      id: "events",
      title: "Events (Google Calendar)",
      data: "https://calendar.google.com/",
      options: {
        icon: "calendar-days",
      },
    });
  }, []);

  return (
    <>
      <Head />
      <body></body>
    </>
  );
};

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <title>test</title>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <meta name="description" />
    <meta name="twitter:url" />
  </>
);

export default CMSView;
