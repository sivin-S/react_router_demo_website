import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router'
import Layout from './Layout.jsx'
import {Home,About,Contact,Companies,User} from './components/index.js'
import Github,{githubInfoLoader}  from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
          <Route path='about/' element={<About/>}>
            <Route path='companies' element={<Companies/>}/>
          </Route>
      <Route path='contact' element={<Contact/>}/>
      {/* path parameter or dynamic routing */}
      {/* <Route path='user/' element={<User/>}>
         <Route path=':userId' element={<User/>}/>
      </Route> */}
      <Route
      loader={githubInfoLoader} 
      path='github' element={<Github/>}/>
      <Route path='*' element={<div>Not Found</div>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
