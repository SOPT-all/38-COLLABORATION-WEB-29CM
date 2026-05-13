import ContactSection from './footer-contact-section';
import NoticeSection from './footer-notice-section';
import CompanyInfoSection from './footer-companyinfo-section';
import type { NoticeSectionProps } from './types';

const Footer = ({ notices }: NoticeSectionProps) => (
  <footer className="px-9">
    <ContactSection />
    <NoticeSection notices={notices} />
    <CompanyInfoSection />
  </footer>
);

export default Footer;
