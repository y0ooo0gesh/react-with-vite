import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hello from './Hello.jsx'
import 'tachyons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello greetings={'jabba'+"jabba babba"} />
  </StrictMode>,
)
