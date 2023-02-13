import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 페이지 이동 시 화면 최상단으로 스크롤 이동
 */

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
