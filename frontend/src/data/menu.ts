import {
  LayoutDashboard,
  Map,
  ShieldAlert,
  Ambulance,
  BarChart3,
  Settings,
  Bot,
  FileText,
  Users,
  Route,
} from "lucide-react";

export const menuItems = {
 Admin: [
  { icon: LayoutDashboard, name: "Dashboard", path: "/dashboard" },
  { icon: Bot, name: "AI Assistant", path: "/assistant" },
  { icon: FileText, name: "Reports", path: "/reports" },
  { icon: Map, name: "Live Map", path: "/live-map" },
  { icon: BarChart3, name: "Analytics", path: "/analytics" },
  { icon: Users, name: "Users", path: "/users" },
  { icon: Settings, name: "Settings", path: "/settings" },
],

  Police: [
    { icon: LayoutDashboard, name: "Dashboard", path: "/dashboard" },
    { icon: ShieldAlert, name: "Violations", path: "/violations" },
    { icon: Map, name: "Hotspots", path: "/hotspots" },
    { icon: Bot, name: "AI Assistant", path: "/assistant" },
    { icon: Map, name: "Live Map", path: "/live-map" },
    
  ],

  Emergency: [
    { icon: LayoutDashboard, name: "Dashboard", path: "/dashboard" },
    { icon: Ambulance, name: "Emergency", path: "/emergency" },
    { icon: Route, name: "Green Corridor", path: "/corridor" },
    { icon: Bot, name: "AI Assistant", path: "/assistant" },
    { icon: Map, name: "Live Map", path: "/live-map" },
  ],
};