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
                <header></header>
                <main>
                    {children}
                </main>
                <footer></footer>
            </body>
        </html>
    )
};
