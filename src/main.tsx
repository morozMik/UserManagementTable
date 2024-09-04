import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { PrimeReactProvider } from "primereact/api";
import { MyDesignSystem } from './CustomTailwindTableComfig.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider value={{ unstyled: false, pt: MyDesignSystem  }}>
    <React.StrictMode>
      <Provider store={store}>
        
          <App />
        
      </Provider>
    </React.StrictMode>
  </PrimeReactProvider>
)
