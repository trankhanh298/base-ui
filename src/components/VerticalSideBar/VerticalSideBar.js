import React from 'react';
// import 'react-pro-sidebar/dist/css/styles.css';
import './VerticalSideBar.scss'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const VerticalSideBar = () => (
  <div className="side-bar-wrapper">
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem >
          <Link to="/">Dashboard</Link>
        </MenuItem>
        <MenuItem >
          <Link to="/help">Help</Link>
        </MenuItem>
        <SubMenu title="Components">
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  </div>
);

VerticalSideBar.propTypes = {};

VerticalSideBar.defaultProps = {};

export default VerticalSideBar;
