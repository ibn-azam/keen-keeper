import { createBrowserRouter } from 'react-router'
import Root from '../components/Root/Root'
import HomePage from '../pages/homepage/HomePage'
import TimeLinePage from '../pages/timeline/TimeLine'
import StatsPage from '../pages/stats/Stats'
import { Suspense } from 'react'
import FriendDetails from '../components/Friends/FriendDetails/FriendDetails'

const friendsPromise = fetch('/data.json').then(res => res.json());


export const router = createBrowserRouter([
  {path:'/', Component: Root,
    children:[
       {index:true ,
        element:<Suspense fallback={<span>Loading....</span>}>
          <HomePage friendsPromise={friendsPromise}></HomePage>
        </Suspense>},
        {
          path:'friends/:friendId', Component:FriendDetails
        },
       {path:"/timeline" , Component: TimeLinePage},
       {path:"/stats", Component: StatsPage},
    ]
  }
])