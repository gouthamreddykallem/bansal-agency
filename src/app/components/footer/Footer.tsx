import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Instagram } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.topContainer}>
          <div className={styles.topContent}>
            <div className={styles.column}>
              <h3>Insurance Solutions</h3>
              <ul>
                <li><Link href="/insurance-by-industry">Insurance by Industry</Link></li>
                <li><Link href="/personal-insurance">Personal Insurance</Link></li>
                <li><Link href="/business-insurance">Business Insurance</Link></li>
                {/* <li><Link href="/employee-benefits">Employee Benefits</Link></li> */}
                <li><Link href="/interactive-graphics">Explore Interactive Graphics</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>About Bansal Insurance Agency</h3>
              <ul>
                <li><Link href="/about-our-agency">About Our Agency</Link></li>
                <li><Link href="/join-our-team">Join Our Team</Link></li>
                <li><Link href="/reviews">Read Our Reviews</Link></li>
                <li><Link href="/insurance-companies">Insurance Companies</Link></li>
                <li><Link href="/we-are-independent">We Are Independent</Link></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h3>Get Help</h3>
              <ul>
                <li><Link href="/service-center">Service Center</Link></li>
                <li><Link href="/report-claim">Report a Claim</Link></li>
                <li><Link href="/pay-bill">Pay Bill</Link></li>
                <li><Link href="/request-certificate">Request a Certificate</Link></li>
                <li><Link href="/web-accessibility">Web Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.bottomContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.logo}>Bansal</div>
            <h3>Contact Us</h3>
            <p>3735 W SHAW AVE.</p>
            {/* <p>Suite 101</p> */}
            <p>Fresno, CA 93711</p>
            <p><a href="tel:559-475-8485">559-475-8485</a></p>
            <p><a href="mailto:ateetagency@gmail.com">Email Us</a></p>
            {/* <p>888-227-6988 fax</p> */}
            <div className={styles.socialIcons}>
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            </div>
            <Link href="/visit-office" className={styles.officeButton}>Visit Our Fresno, CA Office</Link>
          </div>
          <div className={styles.agencyInfo}>
            <h3>Experience the Value of an Independent Agency</h3>
            <p>At Bansal Insurance Agency, were your one-stop shop for your insurance needs. Our commitment to a long-term mutually beneficial relationship is expressed by the flexible options we offer to our clients on every engagement.</p>
            <p>We are licensed in AR, AZ, CA, CO, DE, FL, GA, IA, IL, IN, KS, KY, MA, MI, MN, MS, NJ, NM, NV, OH, OK, OR, PA, SC, TX, UT, VA, WA, WI, and WY.</p>
            <p>© 2024 Bansal Insurance Agency, Inc DBA Bansal Insurance Agency | Powered by Forge3 ActiveAgency | All rights reserved | <Link href="/privacy-policy">Privacy Policy</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;