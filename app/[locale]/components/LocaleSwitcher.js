"use client";

import { locales, defaultLocale } from "../../../config";
import Link from "next/link";
import styles from "./LocaleSwitcher.module.css";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
    const pathname = usePathname();
    
    // Extract current locale from the path name.
    const currentLocale = pathname?.split("/")[1] || defaultLocale; // Default to "pt-BR" if not found.
    
    const redirectPathname = (locale) => {
        if (!pathname) return "/";
        
        const segments = pathname.split("/")
        segments[1] = locale;
        
        return segments.join("/");
    };
    
    return (
        <ul className={styles["locale-switcher"]}>
            <li key={currentLocale}>{currentLocale}</li>
            {locales.filter((locale) => locale !== currentLocale).map((locale) => {
                return (
                    <li key={locale}>
                        <Link href={redirectPathname(locale)} scroll={false}>{locale}</Link>
                    </li>
                )
            })}
        </ul>
    );
};
