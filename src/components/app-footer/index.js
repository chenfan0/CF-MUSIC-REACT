import React, { memo } from 'react'

import link from '@/common/music-footer-link'

import {
  FooterWrapper,
  FooterLeft,
  FooterRight
} from './style'

export default memo(function CFAppFooter() {
  return (
    <FooterWrapper>
      <div className='center wrap-v2'>
        <FooterLeft>
          <p className='link'>
            {
              link.map((item) => {
                return <a href={item.link} key={item.title} className='link-item'>{item.title}</a>
              })
            }
          </p>
          <p className='second'>
            <span>网易公司版权所有©1997-2021</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href='https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png'>浙网文[2021] 1186-054号</a>
          </p>
          <p className='third'>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span>举报邮箱：</span>
            <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
          </p>
          <p className='last'>
            <a href="https://beian.miit.gov.cn/#/Integrated/index">粤B2-20090191-18  工业和信息化部备案管理系统网站</a>
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564" className='police'>浙公网安备 33010902002564号</a>
          </p>
        </FooterLeft>
        <FooterRight>
          <div className='first'>
            <a href="https://web-amped.music.163.com/" className='sprite_footer_02 f-logo a_indent' >Amped Studio</a>
            <span className='sprite_footer_01' />
          </div>
          <div className='second'>
            <a href="//music.163.com/st/userbasic#/auth" className='sprite_footer_02 s-logo  a_indent' >用户认证</a>
            <span className='sprite_footer_01' />
          </div>
          <div className='third'>
            <a href="//music.163.com/musician/artist" className='sprite_footer_02 t-logo  a_indent' >独立音乐人</a>
            <span className='sprite_footer_01' />
          </div>
          <div className='four'>
            <a href="//music.163.com/web/reward" className='sprite_footer_02 l-logo four-logo  a_indent' >赞赏</a>
            <span className='sprite_footer_01' />
          </div>
          <div className='last'>
            <a href="//music.163.com/uservideo#/plan" className='sprite_footer_02 l-logo  a_indent' >视频奖励</a>
            <span className='sprite_footer_01' />
          </div>
        </FooterRight>
      </div>
    </FooterWrapper>
  )
})
