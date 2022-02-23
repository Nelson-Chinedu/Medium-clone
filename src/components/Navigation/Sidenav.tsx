import React, { FunctionComponent } from "react";

const Sidenav: FunctionComponent<{}> = () => {
  return (
    <div className="c-sidenav border-r border-gray-300 h-screen">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Stories">
        <path
          d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
          stroke="currentColor"
        ></path>
        <path d="M8 8.5h8M8 15.5h5M8 12h8" stroke="currentColor" stroke-linecap="round"></path>
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Home">
        <path
          d="M4.5 10.75v10.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-5.5c0-.14.11-.25.25-.25h3.5c.14 0 .25.11.25.25v5.5c0 .14.11.25.25.25h5c.14 0 .25-.11.25-.25v-10.5M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications">
        <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" stroke-linecap="round"></path>
        <path
          d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
          stroke="currentColor"
          stroke-linejoin="round"
        ></path>
      </svg>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Lists">
        <path
          d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
          stroke="currentColor"
          stroke-linecap="round"
        ></path>
        <path
          d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
          stroke="currentColor"
          stroke-linecap="round"
        ></path>
      </svg>
    </div>
  );
};

export default Sidenav;
