import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom'
import { RestaurantProvider } from './context/RestaurantContext'
// import { Home, RestaurantDetail, UpdatePage } from './pages'
const Home = lazy(() => import('./pages/Home'))
const UpdatePage = lazy(() => import('./pages/UpdatePage'))
const RestaurantDetail = lazy(() => import('./pages/RestaurantDetail'))

const SuspenseWrapper = ({ children }) => <Suspense fallback={<div>Loading...</div>}>{ children }</Suspense>



function App() {
  
  // Error Boundary Example
  // const name = null
  // const func = () => {
  //   return new Promise((resolve,reject) => {
  //     if(name?.age) resolve("THERE IS AGE");
  //     else reject("Errorkajsghdaghdj")

  //   })
  // }
  // func()
 
  
  return (
    <RestaurantProvider>
      <div className="container">
        <Router>
          <Routes>
            <Route path='/' element={ <Navigate to="/restaurants" replace /> } />
            <Route path='/restaurants' element={<SuspenseWrapper><Home /></SuspenseWrapper>} />
            <Route path='/restaurants/:id/update' element={<SuspenseWrapper><UpdatePage /></SuspenseWrapper>} />
            <Route path='/restaurants/:id' element={<SuspenseWrapper><RestaurantDetail /></SuspenseWrapper>} />
          </Routes>
        </Router>
      </div>
    </RestaurantProvider>
  );
}

export default App;
