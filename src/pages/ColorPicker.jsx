import React, { useState } from "react";
import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

const ColorPicker = () => {
  const [color, setColor] = useState("#008000");
  const change = (args) => {
    setColor(args.currentValue.hex);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl ">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" style={{ backgroundColor: color }}></div>
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <h4 className="text-2xl font-semibold mt-2 mb-4">Inline Palette</h4>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            ></ColorPickerComponent>
          </div>
          <div>
            <h4 className="text-2xl font-semibold mt-2 mb-4">Inline Picker</h4>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            ></ColorPickerComponent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
