import { Outlet, ScrollRestoration } from 'react-router';

import Footer from '@shared/ui/footer/footer';
import Header from '@shared/ui/header/header';

import { useNoticesQuery } from '@shared/api/notices/notices';

const Layout = () => {
  const { data } = useNoticesQuery();
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollRestoration />
      <Header variant="scroll" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer notices={data?.notices ?? []} />
    </div>
  );
};

export default Layout;
