interface Notice {
  title: string;
  displayOrder: number;
}

interface NoticeSectionProps {
  notices: Notice[];
}

const NoticeSection = ({ notices }: NoticeSectionProps) => (
  <div className="flex justify-between border-b border-gray-200 pt-2.5 pb-10">
    <div className="px-2.5">
      <h3 className="text-caption-01 flex flex-col gap-2">NOTICE</h3>
      <ul className="text-body-02-regular flex flex-col">
        {notices
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map((notice) => (
            <li key={notice.displayOrder} className="py-1">
              {notice.title}
            </li>
          ))}
      </ul>
    </div>
    <div className="flex">
      <div className="flex w-36 flex-col gap-2 px-2.5">
        <h3 className="text-caption-01">ABOUT US</h3>
        <ul className="text-body-02-regular">
          <li>인재채용</li>
          <li>상시 할인 혜택</li>
        </ul>
      </div>
      <div className="flex w-36 flex-col gap-2 px-2.5">
        <h3 className="text-caption-01">MY ORDER</h3>
        <ul className="text-body-02-regular">
          <li>주문배송</li>
          <li>취소/교환/반품 내역</li>
          <li>상품 리뷰 내역</li>
          <li>증빙서류발급</li>
        </ul>
      </div>
      <div className="flex w-36 flex-col gap-2 px-2.5">
        <h3 className="text-caption-01">MY ACCOUNT</h3>
        <ul className="text-body-02-regular">
          <li>회원정보수정</li>
          <li>나의 멤버십 등급</li>
          <li>적립금 현황</li>
          <li>쿠폰</li>
        </ul>
      </div>
      <div className="flex w-36 flex-col gap-2 px-2.5">
        <h3 className="text-caption-01">HELP</h3>
        <ul className="text-body-02-regular">
          <li>1:1 문의</li>
          <li>입점 및 제휴 문의</li>
          <li>상품 Q&A 내역</li>
          <li>공지사항</li>
          <li>FAQ</li>
          <li>고객의 소리</li>
        </ul>
      </div>
    </div>
  </div>
);

export default NoticeSection;
