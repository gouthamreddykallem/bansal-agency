import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';
import { Search, Menu, X, Truck, Car, Briefcase, FileText, Phone, CreditCard, MapPin, Mail, Clock, Star, UserPlus, Facebook } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const InsuranceDropdown = () => (
    <div className={styles.dropdown}>
      <div className={styles.dropdownContent}>
        <div className={styles.dropdownColumn}>
          <Truck size={24} className={styles.icon} />
          <h3>Insurance by Industry</h3>
          <ul>
            <li><Link href="/insurance/industry/trucking">Trucking</Link></li>
            <li><Link href="/insurance/industry/contractor">Contractor</Link></li>
            <li><Link href="/insurance/industry/farm">Farm</Link></li>
            <li><Link href="/insurance/industry" className={styles.seeAll}>See All</Link></li>
          </ul>
        </div>
        <div className={styles.dropdownColumn}>
          <Car size={24} className={styles.icon} />
          <h3>Personal Insurance</h3>
          <ul>
            <li><Link href="/insurance/personal/auto">Auto</Link></li>
            <li><Link href="/insurance/personal/home">Home</Link></li>
            <li><Link href="/insurance/personal/life">Individual Life</Link></li>
            <li><Link href="/insurance/personal" className={styles.seeAll}>See All</Link></li>
          </ul>
        </div>
        <div className={styles.dropdownColumn}>
          <Briefcase size={24} className={styles.icon} />
          <h3>Business Insurance</h3>
          <ul>
            <li><Link href="/insurance/business/auto">Business Auto</Link></li>
            <li><Link href="/insurance/business/owners">Business Owners</Link></li>
            <li><Link href="/insurance/business/liability">General Liability</Link></li>
            <li><Link href="/insurance/business" className={styles.seeAll}>See All</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ServiceCenterDropdown = () => (
    <div className={`${styles.dropdown} ${styles.serviceCenterDropdown}`}>
      <div className={styles.dropdownContent}>
        <div className={styles.dropdownColumn}>
          <FileText size={24} className={styles.icon} />
          <h3>Explore Policy options</h3>
          <ul>
            <li><Link href="/service-center/client-login-old">Client Login (OLD)</Link></li>
            <li><Link href="/service-center/client-login-new">Client Login (NEW)</Link></li>
            <li><Link href="/service-center/service" className={styles.seeAll}>See All</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );

  const AboutDropdown = () => (
    <div className={`${styles.dropdown} ${styles.aboutDropdown}`}>
      <div className={styles.dropdownContent}>
        <div className={styles.dropdownColumn}>
          <FileText size={24} className={styles.icon} />
          <h3>About Our Agency</h3>
          <ul>
            <li><Link href="/about/reviews">Read Our Reviews</Link></li>
            <li><Link href="/about/insurance-companies">Insurance Companies</Link></li>
            <li><Link href="/about/Independent">We Are Independent</Link></li>
            <li><Link href="/about/join-team">Join Our Team</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );

  const ContactDropdown = () => (
    <div className={`${styles.dropdown} ${styles.contactDropdown}`}>
      <div className={styles.dropdownContent}>
        <div className={styles.contactColumn}>
          <div className={styles.contactItem}>
            <MapPin size={20} className={styles.icon} />
            <div>
              <h3>Fresno, CA Office</h3>
              <p>3735 W SHAW AVE.</p>
              <p>Fresno, CA 93711</p>
            </div>
          </div>
          <div className={styles.contactItem}>
            <Phone size={20} className={styles.icon} />
            <a href="tel:559-475-8485">559-475-8485</a>
          </div>
          <div className={styles.contactItem}>
            <Mail size={20} className={styles.icon} />
            <a href="mailto:ateetagency@gmail.com">ateetagency@gmail.com</a>
          </div>
          <div className={styles.contactItem}>
            <Clock size={20} className={styles.icon} />
            <p>Office Hours: 9-5, M-F</p>
          </div>
          <div className={styles.contactLinks}>
            <Link href="/review" className={styles.contactLink}>
              <Star size={20} className={styles.icon} />
              Review Us
            </Link>
            <Link href="/refer" className={styles.contactLink}>
              <UserPlus size={20} className={styles.icon} />
              Refer Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );



  const MobileMenu = () => (
    <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
      <button className={styles.closeButton} onClick={toggleMenu}>
        <X size={24} />
      </button>
      <nav>
        <ul className={styles.mobileNavList}>
          <li>
            <span>Insurance Solutions</span>
            <InsuranceDropdown />
          </li>
          <li>
            <span>Service Center</span>
            <ServiceCenterDropdown />
          </li>
          <li>
            <span>About</span>
            <AboutDropdown />
          </li>
          <li>
            <span>Contact</span>
            <ContactDropdown />
          </li>
        </ul>
      </nav>
      <div className={styles.mobileContact}>
        <span className={styles.phoneNumber}>559-475-8485</span>
        <button className={styles.quoteButton}>Request Quote</button>
      </div>
    </div>
  );

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <Phone size={16} />
            <span>For more inquiries, call us today! 559-475-8485</span>
          </div>
          <div className={styles.topBarRight}>
            <span>License # 6012574</span>
            <span>Stay connected:</span>
            <a href="#" aria-label="Facebook">
              <Facebook size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        {isMobile ? (
          <>
            <div className={styles.mobileHeader}>
              <button className={styles.searchButton} aria-label="Search">
                <Search size={20} />
              </button>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/logo.png"
                  alt="Bansal Insurance Agency, Inc."
                  width={180}
                  height={48}
                  className={styles.logoImage}
                />
              </Link>
              <button className={styles.menuButton} onClick={toggleMenu}>
                Menu <Menu size={20} />
              </button>
            </div>
            <MobileMenu />
          </>
        ) : (
          <>
            <div className={styles.leftSection}>
              <Link href="/" className={styles.logoLink}>
                <Image
                  src="/logo.png"
                  alt="Bansal Insurance Agency, Inc."
                  width={240}
                  height={60}
                  className={styles.logoImage}
                />
              </Link>
              <nav className={styles.nav}>
                <ul className={styles.navList}>
                  <li className={styles.hasDropdown}>
                    <Link href="/insurance-solutions" className={styles.navLink}>Insurance Solutions</Link>
                    <InsuranceDropdown />
                  </li>
                  <li className={styles.hasDropdown}>
                    <Link href="/service-center" className={styles.navLink}>Service Center</Link>
                    <ServiceCenterDropdown />
                  </li>
                  <li className={styles.hasDropdown}>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <AboutDropdown />
                  </li>
                  <li className={styles.hasDropdown}>
                    <Link href="/contact" className={styles.navLink}>Contact</Link>
                    <ContactDropdown />
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.rightSection}>
              <a href="tel:559-475-8485" className={styles.phoneNumber}>559-475-8485</a>
              <button className={styles.quoteButton}>Request Quote</button>
              <button className={styles.searchButton} aria-label="Search">
                <Search size={20} />
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;