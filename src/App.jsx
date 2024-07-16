import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Recipe from './Recipe.jsx';
import Single from './Single.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Admin from './Admin.jsx';
import Footer from './Footer.jsx';
import { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Context, { server } from './main.jsx';
import Wishlist from './Wishlist.jsx';
import Loader from './Loader.jsx';
import { AuthProvider } from './AuthContext.jsx';
import ProtectedRoute from './ProtectedRoute.jsx';

const App = () => {
  const { setUser, setIsAuthenticated, setLoading } = useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios.get(`${server}/users/me`, {
      withCredentials: true,
    }).then(res => {
      setUser(res.data.user);
      setIsAuthenticated(true);
      setLoading(false);
    }).catch(error => {
      console.error('Error fetching user data:', error); // Add detailed error logging
      setUser({});
      setIsAuthenticated(false);
      setLoading(false);
    });
  }, [setUser, setIsAuthenticated, setLoading]);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe' element={<Recipe />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/footer' element={<Footer />} />
          <Route path="/recipe/:id" element={<Single />} />
       
          <Route path="/wishlist" element={<ProtectedRoute element={Wishlist} />} />
          <Route path='/admin' element={<ProtectedRoute element={Admin} />} />
        </Routes>
        <Toaster />
      </Router>
    </AuthProvider>
  );
};

export default App;
