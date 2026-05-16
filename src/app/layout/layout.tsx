import { Outlet } from 'react-router';

import Footer from '@shared/ui/footer/footer';
import Header from '@shared/ui/header/header';

import { useNotices } from '@shared/api/notices/notices';
import { useQuery } from '@tanstack/react-query';

const Layout = () => {
  const { data } = useQuery(useNotices);
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="scroll" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer notices={data?.notices ?? []} />
    </div>
  );
};

export default Layout;
