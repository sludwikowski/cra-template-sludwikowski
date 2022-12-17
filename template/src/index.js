import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider, CssBaseline } from '@mui/material'

import App from './App'

// import './firebaseConfig'

import { store } from './store'

import { theme } from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
