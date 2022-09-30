import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Groups from '../Group/Group';
import User from '../User/User';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function SideBar() {

  return (
    <>
      <ProSidebar style={{height:'90vh'}}>
          <Menu iconShape="square">
            <MenuItem >Chat App</MenuItem>
            <SubMenu title="User" >
              <User />
            </SubMenu>
            <SubMenu title="Group" >
              <Groups/>
            </SubMenu>
          </Menu>
      </ProSidebar>
    </>
  );
}

export default SideBar