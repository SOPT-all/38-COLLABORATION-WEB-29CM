import ContactSection from './contact-section';
import NoticeSection from './notice-section';
import CompanyInfoSection from './companyinfo-section';
import type { NoticeSectionProps } from './types';

const Footer = ({ notices }: NoticeSectionProps) => (
  <footer className="px-9">
    <ContactSection />
    <NoticeSection notices={notices} />
    <CompanyInfoSection />
  </footer>
);

export default Footer;
