import React, { useState } from "react";
import { Checkbox, Collapse } from "antd";

const { Panel } = Collapse;

const Check = (props) => {
  const brands = [
    { id: 1, name: "Iphone" },
    { id: 2, name: "Samsung" },
    { id: 3, name: "Sony" },
    { id: 4, name: "Xiaomi" },
    { id: 5, name: "Realme" },
    { id: 6, name: "Pixel" },
    { id: 7, name: "Rog Phone" },
  ];

  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    props.handleFilters(newChecked);
  };

  return (
    <div>
      <Collapse defaultActiveKey={[["0"]]}>
        <Panel header key="1">
          {brands.map((value, index) => (
            <React.Fragment key={index}>
              <Checkbox
                onChange={() => handleToggle(value.id)}
                type="checkbox"
                checked={checked.indexOf(value.id) === -1 ? false : true}
              />
              <span>{value.name}</span>
            </React.Fragment>
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};

export default Check;
