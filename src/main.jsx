import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import Usecontextprovider from "./components/Context/Usecontext";

createRoot(document.getElementById('root')).render(
  <Usecontextprovider>
    {/* ال فيها طبعا كل المبينات بتاع المنتجات ف ادي بتستخد ف كل مره انتا بيكون معاك ينات ب شكل دا مش لينك و فيتش و اكلام دا تمام كده  productpageموجود ف اي مكان و تقدر انك توصل اي بينات ل اي صفحه او اخري من خلال ال فايل دا والمعلومات ال انتا منت عاوز وصلها طبعا ف كل الصفحات هو ال  usecontext  شعان يبقا ال  app  وخليتها اب ل ال  creaTECONTEXT  دي بقا بتاعه ال  Usecontextprovider*/}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Usecontextprovider>
);
