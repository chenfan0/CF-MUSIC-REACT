import React, { memo } from 'react';

import { OperationBarWrapper } from './style';

export default memo(function CFSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;

  return (
    <OperationBarWrapper>
      <span className="play">
        <a href="/abc" className="play-icon button_01">
          <span className="play button_01">
            <i className="button_01"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon button_01">+</a>
      </span>
      <a href="/abc" className="item button_01">
        <i className="icon favor-icon button_01">{favorTitle}</i>
      </a>
      <a href="/abc" className="item button_01">
        <i className="icon share-icon button_01">{shareTitle}</i>
      </a>
      <a href="/abc" className="item button_01">
        <i className="icon download-icon button_01">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item button_01">
        <i className="icon comment-icon button_01">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
