import { companyInfo } from "@/config";
import { getDictionary } from "@/dictionary";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import styles from "./Footer.module.css";

export default async function Footer({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    
    const year = new Date().getFullYear();
    
    return (
        <div className={`container ${styles.footer}`}>
            <div className={`flex ${styles["footer-menu"]}`}>
                <div className={`flex ${styles["footer-heading"]}`}>
                    <img src="/logo.jpg" alt="Vicky Chi Turismo's logo"/>
                    <div className={`${styles["footer-subheading"]}`}>
                        <h2>{companyInfo.name}</h2>
                        <p>{dictionary.FooterComponent.description}</p>
                    </div>
                </div>
                <div className={`${styles["footer-nav"]}`}>
                    <h2>{dictionary.FooterComponent.nav_h2}</h2>
                    <nav>
                        <ul>
                            <li><Link href="/">{dictionary.FooterComponent.nav_home}</Link></li>
                            <li><Link href="">{dictionary.FooterComponent.nav_about}</Link></li>
                            <li><Link href="/tours">{dictionary.FooterComponent.nav_tours}</Link></li>
                            <li><Link href="">{dictionary.FooterComponent.nav_contact}</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={`${styles["footer-contact"]}`}>
                    <h2>{dictionary.FooterComponent.contact_h2}</h2>
                    {companyInfo.phoneNumber.map((item, index) => (
                        <p className={`flex ${styles["phone-number"]}`} key={index}><FaPhoneAlt />{item}</p>
                    ))}
                    <p className="flex"><IoMail />{companyInfo.email}</p>
                    <a href="https://wa.me/5521964111173" target="_blank">
                        <div className={`button ${styles.button}`}>
                            {dictionary.FooterComponent.contact_button}
                        </div>
                    </a>
                </div>
            </div>
            <div className={`flex ${styles["social-media"]}`}>
                    <a href="" className="facebook-icon" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="" className="instagram-icon" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/5521964111173" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
            </div>
            <div className={`${styles["copyright"]}`}>
                <h4>{dictionary.FooterComponent.h4.replace("{year}", year)}</h4>
            </div>
        </div>
    );
};
