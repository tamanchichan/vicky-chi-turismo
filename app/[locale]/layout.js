export default function LocaleLayout({ children }) {
    return(
        <html>
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
