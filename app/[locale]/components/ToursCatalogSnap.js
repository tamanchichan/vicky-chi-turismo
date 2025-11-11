import { getDictionary } from "@/dictionary";
import Link from "next/link";
import styles from "./ToursCatalogSnap.module.css";

export default async function ToursCatalog({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    const tours = dictionary.ToursData;
    
    return (
        <div className={`container flex ${styles["tours"]} snap`}>
            {tours.slice(0, 5).map((tour, index) => (
                <div className={`${styles["tour"]}`} key={index}>
                    <img src={tour.img[0].src} alt={tour.img[0].alt}></img>
                    <h3>{tour.name}</h3>
                    <p>{tour.description.first}</p>
                    <Link className="button" href={`/${locale}/tours/${tour.slug}`}>{dictionary.ButtonComponent.see_details}</Link>
                </div>
            ))}
                <div className={`${styles["tour"]} ${styles["see-more"]}`}>
                    <Link className={`button ${styles["see-more-button"]}`} href={`/${locale}/tours`}>
                            {dictionary.ButtonComponent.see_more}
                    </Link>
                </div>
        </div>
    );
};
