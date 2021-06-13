import React, { memo, useRef } from 'react'
import { useSelector } from 'react-redux'

import emitter from '@/utilis/events'

import { DropdownWrapper } from './style'

export default memo(function CFDropdown() {
  // redux hooks
  const { categories } = useSelector(state => ({
    categories: state.getIn(['playlist', 'categories'])
  }))

  // other hooks
  const menuRef = useRef()
  const typeRef = useRef()

  // other handles
  // 点击选择分类按钮函数
  function select(e) {
    //  停止冒泡
    e.isPropagationStopped = function () {
      return true
    }
    if (menuRef.current.style.display === '' || menuRef.current.style.display === 'none') {
      menuRef.current.style.display = 'block'
    } else {
      menuRef.current.style.display = 'none'
    }
  }
  // 监听页面点击事件
  function close() {
    menuRef.current.style.display = 'none'
  }
  // 监听点击音乐类型事件
  function selectType(e, type) {
    e.isPropagationStopped = function () {
      return true
    }
    typeRef.current.innerHTML = type || '全部'
    emitter.emit('select', type)
  }


  return (
    <DropdownWrapper onClick={close}>
      <h2 ref={typeRef}>全部</h2>
      <div className='select' onClick={e => select(e)}>
        <div className='select-left button_01'>
          <span>选择分类</span>
          <i className='icon sprite_icon_02' />
        </div>
        <div className='select-right button_01' />
        <div className='menu' ref={menuRef}>
          <i className='icon sprite_icon' />
          <div className='total'>
            <p onClick={e => selectType(e)}>全部风格</p>
          </div>
          {
            categories && categories.map((item) => {
              return (
                <div className='category' key={item.name}>
                  <div className='category-left'>{item.name}</div>
                  <div className='divider' />
                  <div className='category-right'>
                    {
                      item.subs.map(iten => {
                        return (
                          <div key={iten.name}>
                            <span onClick={e => selectType(e, iten.name)}>{iten.name}</span>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </DropdownWrapper>
  )
})


