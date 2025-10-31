export default async function ToursLayout({ children, params }) {
    const { locale } = await params;
    
    return (
        <section>
            {children}
        </section>
    );
};
