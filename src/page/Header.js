import React, { Component } from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import Menu from 'react-float-menu';

class Header extends Component {
    
    render() { 
        return <Menu
            dimension={40}
            items={[
              { name: "File" },
              {
                children: [
                  { children: [{ name: "Cut 1" }, { name: "Cut 2" }], name: "Cut" },
                  { name: "Select All" },
                ],
                name: "Edit",
              },
              { name: "Add" },
              {
                children: [
                  { name: "Copy from clipboard" },
                  { name: "Copy selection" },
                ],
                name: "Copy",
              },
              { name: "Save" },
              { name: "Logout" },
            ]}
            shape="square"
            startPosition="top left"
            width={250}
            onSelect={(val) => console.log(val)}
          >
            <PlusCircleOutlined/>
          </Menu>;
    }
}
 
export default Header;