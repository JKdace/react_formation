import React, { useState, useEffect } from "react";
import FlexH3G from "./components/layout/FlexH3G/FlexH3G";
import FlexW1G from "./components/layout/FlexW1G/FlexW1G";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";
import Navbar from "./components/ui/Navbar/Navbar";
import MemeForm, { MemeFormStoredData } from "./components/MemeForm/MemeForm";
import MemeViewer, {
  MemeViewerStoredCurrent,
} from "./components/ui/MemeViewer/MemeViewer";
import { DummyMeme } from "./interfaces/common";
import { store } from "./store/store";
import { change, clear } from "./store/current";
import { MemeThumbnailStoredData } from "./components/ui/MemeThumbnail/MemeThumbnail";
import { Route, Routes, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PdfDocument from "./PDFComponents/PdfDocument/PdfDocument";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const App = () => {
  return (
    <div className="App">
      <FlexH3G>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<h1>Bienvenue</h1>} />
          <Route path="/thumbnail" element={<MemeThumbnailStoredData />} />
          <Route path="/editor" element={<PageEditor />} />
          <Route path="/editor/:id" element={<PageEditor />} />
          <Route path="/pdf" element={<PdfThumbnail />} />
        </Routes>

        <Footer></Footer>
      </FlexH3G>
    </div>
  );
};

function PdfThumbnail() {
  const memes = useSelector((s) => s.ressources.memes);
  const images = useSelector((s) => s.ressources.images);

  return (
    <div>
      {memes.map((m) => (
        <div key={"pdf-" + m.id}>
          <PDFViewer>
            <PdfDocument meme={m} />
          </PDFViewer>
          <PDFDownloadLink document={<PdfDocument meme={m} />} />
        </div>
      ))}
    </div>
  );
}

function PageEditor() {
  const params = useParams();
  const memes = useSelector((s) => s.ressources.memes);
  useEffect(() => {
    const current = store
      .getState()
      .ressources.memes.find((m) => m.id === Number(params.id));
    if (undefined !== current) store.dispatch(change(current));
    else store.dispatch(clear());
  }, [params.id, memes]);
  return (
    <FlexW1G>
      <MemeViewerStoredCurrent basePath="" />
      <MemeFormStoredData />
    </FlexW1G>
  );
}

export default App;

//<MemeViewerStoredCurrent
//meme={current}
//image={images.find((img) => img.id === current.imageId)}
//</FlexW1G>basePath=""></MemeViewerStoredCurrent>
//<MemeFormStoredData
//meme={current}
//images={images}
//onMemeChange={(newMeme) => {setCurrent(newMeme);}}
//</div>>
//</MemeFormStoredData>
