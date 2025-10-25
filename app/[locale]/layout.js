import Header from "./components/Header";

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    return(
        <html lang={locale}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/gh/tamanchichan/cdn/reset.css"
                    media="all"
                />
            </head>
            <body>
                <header><Header params={params}></Header></header>
                <main>
                    {children}
                </main>
                <footer></footer>
            </body>
        </html>
    )
};
