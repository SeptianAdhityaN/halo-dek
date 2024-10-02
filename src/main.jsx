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
    path: '/halo-dek/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path:'/halo-dek/service',
    element: <ServicePage />,
    errorElement: <ErrorPage />
  },
  {
    path:'/halo-dek/news',
    element: <NewsPage />,
    errorElement: <ErrorPage />
  },
  {
    path:'/halo-dek/about',
    element: <AboutPage />,
    errorElement: <ErrorPage />
  },
  {
    path:'/halo-dek/contact',
    element: <Contact />,
    errorElement: <ErrorPage />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
