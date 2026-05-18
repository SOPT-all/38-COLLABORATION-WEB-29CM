import { ROUTE_PATH } from '@app/router/path';

import { Logo29cmIcon } from '@shared/icons';

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-10 text-center">
        <a href={ROUTE_PATH.HOME} aria-label="29CM 홈으로 이동">
          <Logo29cmIcon className="h-auto w-33" />
        </a>

        <div className="flex flex-col items-center gap-3">
          <span className="text-subtitle-02 text-gray-800">ERROR</span>
          <h1 className="text-title-02 text-gray-900">
            페이지를 불러오지 못했어요
          </h1>
          <p className="text-body-01 text-gray-800">
            주소가 잘못되었거나 일시적인 문제가 발생했을 수 있습니다. <br />
            홈으로 돌아가 다시 원하는 상품과 콘텐츠를 찾아보세요.
          </p>
        </div>

        <a
          href={ROUTE_PATH.HOME}
          className="text-title-03 flex h-14 items-center justify-center bg-black px-8 text-white"
        >
          홈으로 가기
        </a>
      </div>
    </section>
  );
};

export default ErrorPage;
