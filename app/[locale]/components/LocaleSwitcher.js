"use client";

import { locales, defaultLocale } from "../../../config";
import Link from "next/link";
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
    
    // Create a list of locales with the current one as first.
    const sortedLocales = [currentLocale, ...locales.filter(locale => locale !== currentLocale)];
    
    return (
        <ul className="locale-switcher">
            {sortedLocales.map((locale) => {
                return (
                    <li key={locale}>
                        <Link href={redirectPathname(locale)}>{locale}</Link>
                    </li>
                )
            })}
        </ul>
    )
}