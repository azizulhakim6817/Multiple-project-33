import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RechartPage from "./pages/RechartPage";
import HomePage from "./pages/HomePage";
import ImagePdfPage from "./pages/ImagePdfPage";
import ExcelFilePage from "./pages/ExcelFilePage";
import ImgCompressorMbPage from "./pages/ImgCompressorMbPage";
import VsCodeEditorPage from "./pages/VsCodeEditorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RechartPage" element={<RechartPage />} />
        <Route path="/ImagePdfPage" element={<ImagePdfPage />} />
        <Route path="/ExcelFilePage" element={<ExcelFilePage />} />
        <Route path="/imgCompressorMbPage" element={<ImgCompressorMbPage />} />
        <Route path="/VsCodeEditorPage" element={<VsCodeEditorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
