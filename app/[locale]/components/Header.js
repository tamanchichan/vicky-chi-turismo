import { getDictionary } from "../../../dictionary";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import styles from "./Header.module.css"

export default async function Header({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    
    return (
        <div className={`container flex ${styles.header}`}>
            <h1>{dictionary.HeaderComponent.h1}</h1>
            <nav>
                <ul className="flex">
                    <li><Link href={`/${locale}/`}>{dictionary.HeaderComponent.home}</Link></li>
                    <li><Link href={`/${locale}/about`}>{dictionary.HeaderComponent.about}</Link></li>
                    <li><Link href={`/${locale}/tours`}>{dictionary.HeaderComponent.tours}</Link></li>
                    <li><Link href={`/${locale}/contact`}>{dictionary.HeaderComponent.contact}</Link></li>
                </ul>
            </nav>
            <LocaleSwitcher></LocaleSwitcher>
        </div>
    );
};
