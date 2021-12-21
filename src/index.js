import React from 'react'
import { render } from 'react-dom'
import App from './App'
import MyErrorBoundary from './components/MyErrorBoundary' // for synch errors


render(
  <MyErrorBoundary>
    <App />
  </MyErrorBoundary>,
  document.getElementById('root')
)