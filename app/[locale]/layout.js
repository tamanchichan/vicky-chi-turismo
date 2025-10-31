import Footer from "./components/Footer";
import Header from "./components/Header";
import { locales } from "../../config";
import "./globals.css";

export async function generateStaticParams() {
    return locales.map((locale) => ({ lang: locale}));
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    return(
        <html lang={locale}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/tamanchichan/cdn@latest/reset.css"
                    media="all"
                />
            </head>
            <body>
                <header><Header params={params}></Header></header>
                <main>
                    {children}
                </main>
                <footer><Footer params={params}></Footer></footer>
            </body>
        </html>
    )
};
