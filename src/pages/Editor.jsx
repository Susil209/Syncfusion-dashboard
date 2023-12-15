import React from "react";
import { Header } from "../components";
import {
  RichTextEditorComponent,
  Toolbar,
  Inject,
  Image,
  Link,
  HtmlEditor,
  Count,
  QuickToolbar,
  Table,
} from "@syncfusion/ej2-react-richtexteditor";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent  showCharCount={true}>
      <EditorData />
        <Inject
          services={[
            Toolbar,
            Image,
            Link,
            HtmlEditor,
            Count,
            QuickToolbar,
            Table,
          ]}
        />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
