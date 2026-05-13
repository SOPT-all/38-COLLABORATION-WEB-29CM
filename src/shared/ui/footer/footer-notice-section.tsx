import { FOOTER_ITEMS } from './constants';
import type { Notice } from './types';

interface NoticeSectionProps {
  notices: Notice[];
}

const NoticeSection = ({ notices }: NoticeSectionProps) => (
  <div className="flex justify-between border-b border-gray-200 pt-2.5 pb-2.5">
    <div className="px-2.5">
      <h3 className="text-caption-01 flex flex-col gap-2">NOTICE</h3>
      <ul className="text-body-02-regular flex flex-col">
        {[...notices]
          .sort((a, b) => a.displayOrder - b.displayOrder)
          .map((notice) => (
            <li key={notice.displayOrder} className="py-1">
              {notice.title}
            </li>
          ))}
      </ul>
    </div>
    <div className="flex">
      {FOOTER_ITEMS.map(({ title, links }) => (
        <div key={title} className="flex w-36 flex-col gap-2 px-2.5">
          <h3 className="text-caption-01">{title}</h3>
          <ul className="text-body-02-regular">
            {links.map((link) => (
              <li key={link} className="py-1">
                {link}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default NoticeSection;
