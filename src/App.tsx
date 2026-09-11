import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Toasts } from "./components/Toasts";
import { Dashboard } from "./pages/Dashboard";
import { Roadmap } from "./pages/Roadmap";
import { Today } from "./pages/Today";
import { DayPage } from "./pages/DayPage";
import { Practice } from "./pages/Practice";
import { Materials } from "./pages/Materials";
import { ProgressPage } from "./pages/ProgressPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="today" element={<Today />} />
          <Route path="day/:id" element={<DayPage />} />
          <Route path="practice" element={<Practice />} />
          <Route path="materials" element={<Materials />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toasts />
    </>
  );
}
