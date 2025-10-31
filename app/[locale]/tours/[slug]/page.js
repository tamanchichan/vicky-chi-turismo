import { getDictionary } from "@/dictionary";

export default async function TourPage({ params }) {
    const { locale, slug } = await params;
    const dictionary = await getDictionary(locale);
    const tour = dictionary.ToursData.find(t => t.slug == slug);
    
    return (
        <div className={`container`}>
            <h2>{tour.name}</h2>
        </div>
    );
};
