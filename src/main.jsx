import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

import './App.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="851376311483-d2rdqj43ollfs7l6ib2e91dip0ah563r.apps.googleusercontent.com">
  <App />
</GoogleOAuthProvider>
  </StrictMode>,
)
