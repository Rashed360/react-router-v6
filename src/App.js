import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './comps/Header'
import Home from './comps/Home'
import PlaceOrder from './comps/PlaceOrder'
import NoMatch from './comps/NoMatch'
import Products from './comps/Products'
import FeaturedProducts from './comps/FeaturedProducts'
import NewProducts from './comps/NewProducts'
import Users from './comps/Users'
import UserDetails from './comps/UserDetails'
import Admin from './comps/Admin'
import Profile from './comps/Profile'
import { AuthProvider } from './utils/auth'
import Login from './comps/Login'
import { RequireAuth } from './comps/RequireAuth'

// import About from './comps/About'
const LazyAbout = lazy(() => import('./comps/About'))

function App() {
  return (
    <AuthProvider>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="about" element={<About />} /> */}
          <Route
            path="about"
            element={
              <Suspense fallback="loading...">
                <LazyAbout />
              </Suspense>
            }
          />

          <Route path="order-summary" element={<PlaceOrder />} />

          <Route path="products" element={<Products />}>
            <Route index element={<NewProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
