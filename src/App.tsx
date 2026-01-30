/** @jsxImportSource @emotion/react */
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './pages/Home/components/NavBar';
import FriendSelector from './pages/Home/components/FriendSelector';
import CategorySection from './pages/Home/components/CategorySection';
import Banner from './pages/Home/components/Banner';
import RankingSection from './pages/Home/components/RankingSection/RankingSection';
import LoginPage from './pages/Login/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import MyPage from './pages/MyPage';
import {
  UserManagementProvider,
  userManagement,
} from './pages/Login/contexts/UserManagement';
import React from 'react';
import OrderPage from './pages/Order/OrderPage';
import ScrollToTop from './pages/Home/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProductPage from './pages/ThemeProductPage';
import theme from './styles/theme';
import { css } from '@emotion/react';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import FixedBottomBar from './pages/ProductDetailPage/FixedBottomBar';

const Home = () => (
  <main>
    <FriendSelector />
    <CategorySection />
    <Banner />
    <RankingSection />
  </main>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = userManagement();
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

const RedirectIfLoggedIn = ({ children }: { children: React.ReactNode }) => {
  const { user } = userManagement();
  return user ? <Navigate to="/my" replace /> : <>{children}</>;
};

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPath: true }}>
      <UserManagementProvider>
        <ScrollToTop />
        <NavBar />
        <div
          css={css`
            padding-top: ${theme.spacing[12]};
            max-width: 720px;
            margin: 0 auto;
            min-height: calc(100vh - ${theme.spacing[12]});
          `}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={
                <RedirectIfLoggedIn>
                  <LoginPage />
                </RedirectIfLoggedIn>
              }
            />
            <Route
              path="/my"
              element={
                <ProtectedRoute>
                  <MyPage />
                </ProtectedRoute>
              }
            />
            <Route path="/order/:productId" element={<OrderPage />} />
            <Route path="/themes/:themeId" element={<ThemeProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/detail/:productId" element={<ProductDetailPage />} />
          </Routes>
        </div>
        <FixedBottomBar />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={true}
          closeOnClick
          pauseOnHover
          draggable
        />
      </UserManagementProvider>
    </BrowserRouter>
  );
}

export default App;
