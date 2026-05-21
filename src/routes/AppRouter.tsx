import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import RegisterPage from "../pages/auth/RegisterPage"

import LoginSelectionPage from "../pages/auth/LoginSelectionPage"

import FarmerLoginPage from "../pages/auth/FarmerLoginPage"

import BusinessLoginPage from "../pages/auth/BusinessLoginPage"

import CustomerLoginPage from "../pages/auth/CustomerLoginPage"

import FarmerDashboard from "../pages/dashboard/FarmerDashboard"

import BusinessDashboard from "../pages/dashboard/BusinessDashboard"

import CustomerDashboard from "../pages/dashboard/CustomerDashboard"

import AdminDashboard from "../pages/dashboard/AdminDashboard"

import UploadCropPage from "../pages/dashboard/UploadCropPage"

import MarketplacePage from "../pages/dashboard/MarketplacePage"

import ViewDealPage from "../pages/dashboard/ViewDealPage"

import OrdersPage from "../pages/dashboard/OrdersPage"

import RequestsPage from "../pages/dashboard/RequestsPage"

import NotificationsPage from "../pages/dashboard/NotificationsPage"

import ProtectedRoute from "../components/ProtectedRoute"

import ErrorPage from "../components/ErrorPage"

function AppRouter() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Register */}
        <Route
          path="/"
          element={<RegisterPage />}
        />

        {/* Login */}
        <Route
          path="/login"
          element={<LoginSelectionPage />}
        />

        <Route
          path="/login/farmer"
          element={<FarmerLoginPage />}
        />

        <Route
          path="/login/business"
          element={<BusinessLoginPage />}
        />

        <Route
          path="/login/customer"
          element={<CustomerLoginPage />}
        />

        {/* Farmer */}
        <Route
          path="/dashboard/farmer"
          element={
            <ProtectedRoute>

              <FarmerDashboard />

            </ProtectedRoute>
          }
        />

        {/* Business */}
        <Route
          path="/dashboard/business"
          element={
            <ProtectedRoute>

              <BusinessDashboard />

            </ProtectedRoute>
          }
        />

        {/* Customer */}
        <Route
          path="/dashboard/customer"
          element={
            <ProtectedRoute>

              <CustomerDashboard />

            </ProtectedRoute>
          }
        />

        {/* Admin */}
        <Route
          path="/dashboard/admin"
          element={
            <ProtectedRoute>

              <AdminDashboard />

            </ProtectedRoute>
          }
        />

        {/* Marketplace */}
        <Route
          path="/dashboard/marketplace"
          element={
            <ProtectedRoute>

              <MarketplacePage />

            </ProtectedRoute>
          }
        />

        {/* View Deal */}
        <Route
          path="/dashboard/view-deal/:id"
          element={
            <ProtectedRoute>

              <ViewDealPage />

            </ProtectedRoute>
          }
        />

        {/* Upload Crop */}
        <Route
          path="/dashboard/upload-crop"
          element={
            <ProtectedRoute>

              <UploadCropPage />

            </ProtectedRoute>
          }
        />

        {/* Orders */}
        <Route
          path="/dashboard/orders"
          element={
            <ProtectedRoute>

              <OrdersPage />

            </ProtectedRoute>
          }
        />

        {/* Requests */}
        <Route
          path="/dashboard/requests"
          element={
            <ProtectedRoute>

              <RequestsPage />

            </ProtectedRoute>
          }
        />

        {/* Notifications */}
        <Route
          path="/dashboard/notifications"
          element={
            <ProtectedRoute>

              <NotificationsPage />

            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<ErrorPage />}
        />

      </Routes>

    </BrowserRouter>

  )
}

export default AppRouter