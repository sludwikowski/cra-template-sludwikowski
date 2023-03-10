import React from 'react'

import { Routes, Route } from 'react-router-dom'

import PageHome from './pages/PageHome'

function App () {
  return (
    <div className={'App'}>
      <Routes>
        <Route
          path={'*'}
          element={
            <PageHome />
              }
        />
      </Routes>
    </div>
  )
}

export default App
