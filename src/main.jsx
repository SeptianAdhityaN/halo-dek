import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/404.jsx'
import HomePage from './pages/home.jsx'
import AboutPage from './pages/about.jsx'
import Contact from './pages/contact.jsx'
import ServicePage from './pages/service.jsx'
import NewsPage from './pages/news.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path:'/service',
    element: <ServicePage />,
  },
  {
    path:'/news',
    element: <NewsPage />,
  },
  {
    path:'/about',
    element: <AboutPage />,
  },
  {
    path:'/contact',
    element: <Contact />,
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
