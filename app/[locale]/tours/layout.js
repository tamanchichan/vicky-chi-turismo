export default async function ToursLayout({ children, params }) {
    const { locale } = await params;
    
    return (
        <>
            {children}
        </>
    );
};
