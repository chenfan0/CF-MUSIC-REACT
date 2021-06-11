import React, { memo } from 'react'


import { DropdownWrapper } from './style'
import { Menu, Dropdown, Button } from 'antd';

export default memo(function CFDropdown() {
  const menu = (
    <Menu className='menu'>
      123
    </Menu>
  );
  return (
    <DropdownWrapper>
      <Menu>
        <Dropdown overlay={menu} overlayClassName='test' placement="bottomCenter" arrow>
          <div className='select'>
            <div className='select-left button_01'>
              <span>选择分类</span>
              <i className='icon sprite_icon_02' />
            </div>
            <div className='select-right button_01'></div>
          </div>
        </Dropdown>
      </Menu>
    </DropdownWrapper>
  )
})


