import Link from "next/link";
import { getDictionary } from "../../../dictionary";

export default async function Header({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    
    return (
        <div>
            <h1>{dictionary.Header.h1}</h1>
            <nav>
                <ul>
                    <li><Link href={`/${locale}/`}>{dictionary.Header.home}</Link></li>
                    <li><Link href={`/${locale}/`}>{dictionary.Header.about}</Link></li>
                    <li><Link href={`/${locale}/`}>{dictionary.Header.tours}</Link></li>
                    <li><Link href={`/${locale}/`}>{dictionary.Header.contact}</Link></li>
                </ul>
            </nav>
        </div>
    )
}