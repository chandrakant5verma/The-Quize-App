
import '../style/App.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

// import components
import Main from './Main'
import Quiz from './Quiz'
import Result from './Result'

const router = createBrowserRouter([

{
  path:'/',
  element:<Main></Main>
},
{
  path:'/Result',
  element:<Result></Result>
},
{
  path:'/Quiz',
  element:<Quiz></Quiz>
},
])

function App() {


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
