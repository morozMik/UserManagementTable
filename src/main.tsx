import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={{ unstyled: true, pt: Tailwind  }}>
    <React.StrictMode>
      <Provider store={store}>
        
          <App />
        
      </Provider>
    </React.StrictMode>
  </PrimeReactProvider>
)
