import { useState } from 'react'
import './App.css';
import Grid from './component/Grid/Grid'
function App() {

  return (
    <>
      <div>
        <Grid numberOfCards={9} />
      </div>
    </>
  )
}

export default App
