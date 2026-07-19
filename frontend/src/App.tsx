import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AIAssistantPage from "./pages/AIAssistantPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ReportsPage from "./pages/ReportsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import LiveMapPage from "./pages/LiveMapPage";
import UsersPage from "./pages/UsersPage";
import SettingsPage from "./pages/SettingsPage";
import ViolationsPage from "./pages/ViolationsPage";
import HotspotsPage from "./pages/HotspotsPage";
import EmergencyPage from "./pages/EmergencyPage";
import GreenCorridorPage from "./pages/GreenCorridorPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/assistant"
          element={
            <ProtectedRoute>
              <AIAssistantPage />
            </ProtectedRoute>
          }
        />
        
        <Route
  path="/reports"
  element={
    <ProtectedRoute>
      <ReportsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/analytics"
  element={
    <ProtectedRoute>
      <AnalyticsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/live-map"
  element={
    <ProtectedRoute>
      <LiveMapPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/users"
  element={
    <ProtectedRoute>
      <UsersPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/settings"
  element={
    <ProtectedRoute>
      <SettingsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/violations"
  element={
    <ProtectedRoute>
      <ViolationsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/hotspots"
  element={
    <ProtectedRoute>
      <HotspotsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/emergency"
  element={
    <ProtectedRoute>
      <EmergencyPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/corridor"
  element={
    <ProtectedRoute>
      <GreenCorridorPage />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;