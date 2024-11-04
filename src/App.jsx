import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        {/* La route pour la page d'accueil */}
        <Route path="/" element={<Accueil />} />
        {/* La route pour la page NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
