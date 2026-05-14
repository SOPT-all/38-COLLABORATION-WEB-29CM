import { BarIcon } from '@shared/icons';
import { POLICY_LINKS } from './constants';

const CompanyInfoSection = () => (
  <>
    <div className="text-body-02-bold flex pt-1">
      <div className="flex items-center gap-2.5">
        {POLICY_LINKS.map((link, index) => (
          <span key={link} className="flex items-center gap-2">
            {index !== 0 && <BarIcon aria-hidden="true" />}
            {link}
          </span>
        ))}
      </div>
    </div>
    <div className="text-footer-regular flex flex-col gap-[9px] text-gray-800">
      <div className="mt-[9px] flex items-center gap-1.5">
        <div className="flex gap-2">
          <p>상호명: (주)무신사</p>
          <p>
            사업장소재지: 서울특별시 성동구 아차산로 13길 11, 1층(성수동 2가,
            무신사캠퍼스 N1)
          </p>
          <p>팩스: 070-8622-7737</p>
          <p>사업자등록번호: 211-88-79575</p>
          <p>통신판매업신고:2022-서울성동-01952</p>
        </div>
        <div className="text-caption-02-semibold flex h-4 w-14 items-center justify-center bg-gray-800 px-1.5 py-1 whitespace-nowrap text-white">
          사업자정보확인
        </div>
      </div>
      <div className="flex gap-2">
        <p>전화번호: 1660-2929</p>
        <p>이메일: customer@29cm.co.kr</p>
        <p>대표: 조만호, 조남성</p>
        <p>호스팅서비스: (주)무신사</p>
      </div>
      <span>
        일부 상품의 경우 29CM는 통신판매의 당사자가 아닌 통신판매중개자로서
        상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품
        페이지에서 구체적인 내용을 확인하시기 바랍니다.
      </span>
      <div>
        <span>
          당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을
          체결하여 안전거래를 보장하고 있습니다.&nbsp;
        </span>
        <span className="underline underline-offset-2">
          서비스 가입 사실 확인
        </span>
      </div>
    </div>
  </>
);

export default CompanyInfoSection;
