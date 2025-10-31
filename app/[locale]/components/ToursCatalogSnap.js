import { getDictionary } from "@/dictionary";
import styles from "./ToursCatalogSnap.module.css";

export default async function ToursCatalog({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    const tours = dictionary.ToursData;
    
    return (
        <div className={`container flex ${styles.tours} snap`}>
            {tours.map((tour, index) => (
                <div className={styles.tour} key={index}>
                    <img src={tour.img} alt={tour.name}></img>
                    <h3>{tour.name}</h3>
                    <p>{tour.description}</p>
                    <button className="button">{dictionary.ButtonComponent.details}</button>
                </div>
            ))}
        </div>
    );
};
