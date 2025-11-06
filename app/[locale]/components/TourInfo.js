import { getDictionary } from "@/dictionary";

export default async function TourInfo({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    
    return (
        <div className={`container tour-info`}>
            <h2>{dictionary.TourInfoComponent.h2}</h2>
            {dictionary.TourInfoComponent.info.map((value, index) => (
                <p key={index}>{value}</p>
            ))}
        </div>
    );
};
