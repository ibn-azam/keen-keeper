import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'
import { ContactProvider } from './Context/ContactContext'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <ContactProvider>
    <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer />
  </StrictMode>
  </ContactProvider>
)
