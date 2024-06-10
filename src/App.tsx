
import {useRoutes} from 'react-router-dom';
import './App.css'
import Home from './pages/home'


function App() {
  const routes = useRoutes([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/test",
      element:<Home/>
    }
  ])

  return routes;
}
export default App;
