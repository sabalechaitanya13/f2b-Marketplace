import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import RegisterPage from "./pages/auth/RegisterPage"

import LoginSelectionPage from "./pages/auth/LoginSelectionPage"

import LoginPage from "./pages/auth/LoginPage"

import FarmerDashboard from "./pages/dashboard/FarmerDashboard"

import BusinessDashboard from "./pages/dashboard/BusinessDashboard"

import CustomerDashboard from "./pages/dashboard/CustomerDashboard"

import AdminDashboard from "./pages/dashboard/AdminDashboard"

import MarketplacePage from "./pages/dashboard/MarketplacePage"

import UploadCropPage from "./pages/dashboard/UploadCropPage"

import OrdersPage from "./pages/dashboard/OrdersPage"

import RequestsPage from "./pages/dashboard/RequestsPage"

import NotificationsPage from "./pages/dashboard/NotificationsPage"

import ViewDealPage from "./pages/dashboard/ViewDealPage"

import {
  CropProvider,
} from "./context/CropContext"

import {
  OrderProvider,
} from "./context/OrderContext"

import {
  RequestProvider,
} from "./context/RequestContext"

import {
  NotificationProvider,
} from "./context/NotificationContext"

function App() {

  return (

    <BrowserRouter>

      <NotificationProvider>

        <CropProvider>

          <OrderProvider>

            <RequestProvider>

              <Routes>

                {/* Register */}
                <Route
                  path="/"
                  element={
                    <RegisterPage />
                  }
                />

                {/* Role Selection */}
                <Route
                  path="/login"
                  element={
                    <LoginSelectionPage />
                  }
                />

                {/* Real Login */}
                <Route
                  path="/role-login"
                  element={
                    <LoginPage />
                  }
                />

                {/* Dashboards */}
                <Route
                  path="/dashboard/farmer"
                  element={
                    <FarmerDashboard />
                  }
                />

                <Route
                  path="/dashboard/business"
                  element={
                    <BusinessDashboard />
                  }
                />

                <Route
                  path="/dashboard/customer"
                  element={
                    <CustomerDashboard />
                  }
                />

                <Route
                  path="/dashboard/admin"
                  element={
                    <AdminDashboard />
                  }
                />

                {/* Marketplace */}
                <Route
                  path="/dashboard/marketplace"
                  element={
                    <MarketplacePage />
                  }
                />

                {/* Upload Crop */}
                <Route
                  path="/dashboard/upload-crop"
                  element={
                    <UploadCropPage />
                  }
                />

                {/* Orders */}
                <Route
                  path="/dashboard/orders"
                  element={
                    <OrdersPage />
                  }
                />

                {/* Requests */}
                <Route
                  path="/dashboard/requests"
                  element={
                    <RequestsPage />
                  }
                />

                {/* Notifications */}
                <Route
                  path="/dashboard/notifications"
                  element={
                    <NotificationsPage />
                  }
                />

                {/* View Deal */}
                <Route
                  path="/dashboard/view-deal/:id"
                  element={
                    <ViewDealPage />
                  }
                />

              </Routes>

            </RequestProvider>

          </OrderProvider>

        </CropProvider>

      </NotificationProvider>

    </BrowserRouter>

  )
}

export default App