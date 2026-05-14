import { Outlet } from 'react-router';

import Footer from '@shared/ui/footer/footer';
import Header from '@shared/ui/header/header';

// TODO: Footer 공지 API 연동 후 목데이터 삭제
const mockNotices = [
  { title: '[안내] 2026년 여름 시즌 배송 일정 공지', displayOrder: 1 },
  { title: '[이벤트] 신규 회원 5,000원 쿠폰', displayOrder: 2 },
  { title: '[안내] 개인정보처리방침 개정 안내', displayOrder: 3 },
  { title: '[안내] 시스템 점검 일정', displayOrder: 4 },
  { title: '[이벤트] 룩북 이벤트 당첨자 발표', displayOrder: 5 },
];

const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="scroll" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer notices={mockNotices} />
    </div>
  );
};

export default Layout;
