import ContactSection from './footer-contact-section';
import NoticeSection from './footer-notice-section';
import CompanyInfoSection from './footer-companyinfo-section';

interface Notice {
  title: string;
  displayOrder: number;
}

interface FooterProps {
  notices: Notice[];
}

const Footer = ({ notices }: FooterProps) => (
  <footer className="px-9">
    <ContactSection />
    <NoticeSection notices={notices} />
    <CompanyInfoSection />
  </footer>
);

export default Footer;
