import { ReactElement } from "react";
import { Markdown } from "./components/Markdown";
import './App.css'

export default function App(): ReactElement {

  return (
    <div>
      <h1 className="main-title">
        Indigo Markdown Editor
      </h1>
      <hr/>
      <Markdown />
    </div>
  );
}

