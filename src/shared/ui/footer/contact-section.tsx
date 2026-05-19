import Chip from '@shared/ui/chip/chip';
import {
  InstagramIcon,
  YoutubeIcon,
  AppleIcon,
  GooglePlayIcon,
} from '@shared/icons';

const ContactSection = () => (
  <div className="flex flex-col gap-0.5 border-b border-gray-200 pb-3">
    <span className="text-body-01">고객센터 1660-2929</span>
    <span className="text-body-02-regular">
      운영시간: 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 제외)
    </span>
    <div className="mt-[7px] flex justify-between">
      <div className="flex gap-1">
        <Chip label="FAQ" icon={true} variant="cta" />
        <Chip label="1:1 문의" icon={true} variant="cta" />
      </div>
      <div className="flex gap-[7px]">
        <InstagramIcon aria-hidden="true" />
        <YoutubeIcon aria-hidden="true" />
        <AppleIcon aria-hidden="true" />
        <GooglePlayIcon aria-hidden="true" />
      </div>
    </div>
  </div>
);

export default ContactSection;
