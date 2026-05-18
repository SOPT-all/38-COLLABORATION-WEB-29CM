import CompanyInfoSection from './companyinfo-section';
import ContactSection from './contact-section';
import NoticeSection from './notice-section';
import type { NoticesResponse } from './types';

const Footer = ({ notices }: NoticesResponse) => (
  <footer className="px-9 pb-15">
    <ContactSection />
    <NoticeSection notices={notices} />
    <CompanyInfoSection />
  </footer>
);

export default Footer;
