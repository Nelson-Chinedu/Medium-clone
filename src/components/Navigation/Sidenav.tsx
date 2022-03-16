import React, { FunctionComponent, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tooltip } from 'antd';

import { Avatar, Menu } from 'src/components';

import useMenu from 'src/hooks/useMenu';
import useLocalStorage from 'src/hooks/useLocalStorage';

const Sidenav: FunctionComponent<{}> = () => {
  const { pathname } = useRouter();
  const [state, setState] = useMenu();

  const [user] = useLocalStorage('mc_u');

  const handleToggleMenu = useCallback(() => {
    setState({ ...state, toggleMenu: !state.toggleMenu });
  }, [state]);

  return (
    <>
      <div className="c-sidenav flex flex-col fixed justify-between items-center py-10 border-r border-gray-300 h-screen">
        <div>
          <svg viewBox="0 0 1043.63 592.71" className="w-1/2 m-auto">
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"></path>
              </g>
            </g>
          </svg>
        </div>
        <div>
          <Link href="/">
            <Tooltip placement="right" title="Home" className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Home"
              >
                <path
                  d="M4.5 21.25V10.87c0-.07.04-.15.1-.2l7.25-5.43a.25.25 0 0 1 .3 0l7.25 5.44c.06.04.1.12.1.2v10.37c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25v-5.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v5.5c0 .14-.11.25-.25.25h-4.5a.25.25 0 0 1-.25-.25z"
                  fill={pathname === '/' ? 'currentColor' : ''}
                  stroke="currentColor"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M22 9l-9.1-6.83a1.5 1.5 0 0 0-1.8 0L2 9"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </Tooltip>
          </Link>
          <Link href="/me/notifications">
            <Tooltip
              placement="right"
              title="Notifications"
              className="cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Notifications"
                className="my-10"
              >
                <path
                  d="M15 18.5a3 3 0 1 1-6 0"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
                <path
                  d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  fill={pathname === '/me/notifications' ? 'currentColor' : ''}
                ></path>
              </svg>
            </Tooltip>
          </Link>
          <Link href="/me/lists">
            <Tooltip placement="right" title="Lists" className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Lists"
                className="my-10"
              >
                <path
                  d="M4.5 6.25V21c0 .2.24.32.4.2l5.45-4.09a.25.25 0 0 1 .3 0l5.45 4.09c.16.12.4 0 .4-.2V6.25a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  fill={pathname === '/me/lists' ? 'currentColor' : ''}
                ></path>
                <path
                  d="M8 6V3.25c0-.14.11-.25.25-.25h11.5c.14 0 .25.11.25.25V16.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                ></path>
              </svg>
            </Tooltip>
          </Link>
          <Link href="/me/stories/drafts">
            <Tooltip
              placement="right"
              title="Stories"
              className="cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Stories"
                className="my-10"
              >
                <path
                  d="M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z"
                  stroke="currentColor"
                ></path>
                <path
                  d="M8 8.5h8M8 15.5h5M8 12h8"
                  stroke="currentColor"
                  stroke-linecap="round"
                  fill={pathname === '/me/stories/draft' ? 'currentColor' : ''}
                ></path>
              </svg>
            </Tooltip>
          </Link>
          <hr className="mb-8" />
          <Link href="/new-story">
            <Tooltip placement="right" title="Write" className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                aria-label="Write"
              >
                <path
                  d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z"
                  fill="currentColor"
                ></path>
                <path
                  d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2"
                  stroke="currentColor"
                ></path>
              </svg>
            </Tooltip>
          </Link>
        </div>
        <div className="cursor-pointer" onClick={handleToggleMenu}>
          <Avatar
            alt="profile picture"
            shape="circle"
            size="default"
            src={user.photoURL}
          />
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Sidenav;
