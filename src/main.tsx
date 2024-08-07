import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from 'react-dom/client'
import './styles.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './pages/auth/Store.ts'
import { Router } from './router/Router.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  // </Provider>
)
