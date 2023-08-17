import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* 사이드바 내비게이션 링크 */}
      <ul>
        <li>대시보드</li>
        <li>사용자</li>
        <li>제품</li>
        {/* 더 많은 링크 추가 */}
      </ul>
    </div>
  );
};

export default Sidebar;