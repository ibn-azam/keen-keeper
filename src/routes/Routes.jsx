import { createBrowserRouter } from "react-router";
import Root from "../components/Root/Root";
import HomePage from "../pages/homepage/HomePage";
import TimeLinePage from "../pages/timeline/TimeLine";
import StatsPage from "../pages/stats/Stats";

import FriendDetails from "../components/Friends/FriendDetails/FriendDetails";
import NotFound from "../components/ErrorElement/errorElement";

const friendsPromise = fetch("/data.json").then((res) => res.json());

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        element: <HomePage friendsPromise={friendsPromise} />,
      },
      {
        path: "friends/:friendId",
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const friends = await res.json();
          const friend = friends.find(
            (friend) => friend.id === Number(params.friendId),
          );
          return friend || null;
        },
        Component: FriendDetails,
      },
      { path: "/timeline", Component: TimeLinePage },
      { path: "/stats", Component: StatsPage },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
