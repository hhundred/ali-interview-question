import "./App.css";
import React from "react";
import RedEnvelopeList from "./components/RedEnvelopeList";
import StateDemo from "./components/StateDemo";
import { Routes, Route } from "react-router-dom";
import MyLayout from "./components/MyLayout";
import Cascader from "./components/Cascader";
import CreateInputComponent from "./components/CreateInputComponent";
import UploadImg from "./components/UploadImg";
import LazyApp from "./components/LazyApp";
import MoreTableData from "./components/MoreTableData";
import TestCss from "./components/TestCss";

function App() {
  return (
    <MyLayout>
      <Routes>
        <Route path="aliInterview" element={<RedEnvelopeList />} />
        <Route path="useStateDemo">
          <Route path="/useStateDemo/demoList" element={<StateDemo />} />
          <Route path="/useStateDemo/cascader" element={<Cascader />} />
          <Route
            path="/useStateDemo/createInput"
            element={<CreateInputComponent />}
          />
          <Route path="/useStateDemo/uploadImg" element={<UploadImg />} />
        </Route>
        <Route path="lazyComponent" element={<LazyApp />} />
        <Route path="moreTableData" element={<MoreTableData />} />
        <Route path="testCss" element={<TestCss />} />
      </Routes>
    </MyLayout>
  );
}

export default App;
