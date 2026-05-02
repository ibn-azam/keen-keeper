import { createBrowserRouter } from 'react-router'
import Root from '../components/Root/Root'
import HomePage from '../pages/homepage/HomePage'
import TimeLinePage from '../pages/timeline/TimeLine'
import StatsPage from '../pages/stats/Stats'




export const router = createBrowserRouter([
  {path:'/', Component: Root,
    children:[
       {index:true , Component: HomePage},
       {path:"/timeline" , Component: TimeLinePage},
       {path:"/stats" , Component: StatsPage},
    ]
  }
])