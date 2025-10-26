import { getDictionary } from "@/dictionary";

export default async function ToursCatalog({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    const tours = dictionary.Tours;
    
    return (
        <>
            {tours.map((tour, index) => (
                <div key={index}>
                    <h3>{tour.name}</h3>
                </div>
            ))}
        </>
    )
}