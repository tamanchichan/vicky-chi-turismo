import { companyInfo } from "@/config";
import { getDictionary } from "@/dictionary";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./Contact.module.css";

export default async function Contact({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    console.log(companyInfo);
    
    return (
        <div className="container">
            <h2>{dictionary.ContactComponent.h2}</h2>
            <div className={styles["contact-info"]}>
                <h3>{dictionary.ContactComponent.h3_email}</h3>
                <p>{companyInfo.email}</p>
                <h3>{dictionary.ContactComponent.h3_telephone}</h3>
                {companyInfo.phoneNumber.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            <div className={styles["contact-icons"]}>
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
            </div>
        </div>
    );
}