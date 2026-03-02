import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TerminalPage } from './pages/TerminalPage';
import { ExplorerPage } from './pages/ExplorerPage';
import { BlueprintPage } from './pages/BlueprintPage';
import { StudioPage } from './pages/StudioPage';
import { AnalysisPage } from './pages/AnalysisPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terminal" element={<TerminalPage />} />
        <Route path="/explorer" element={<ExplorerPage />} />
        <Route path="/blueprint" element={<BlueprintPage />} />
        <Route path="/studio" element={<StudioPage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
