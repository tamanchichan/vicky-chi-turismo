import { getDictionary } from "@/dictionary";
import styles from "./page.module.css";

export default async function TourPage({ params }) {
    const { locale, slug } = await params;
    const dictionary = await getDictionary(locale);
    const tour = dictionary.ToursData.find(t => t.slug == slug);
    
    return (
        <>
            <div className={`${styles["tour-cover"]}`}>
                <img src={`/${tour.img}`} alt={tour.name}></img>
            </div>
            <div className={`container`}>
                <h2>{tour.name}</h2>
                <p>{tour.description}</p>
            </div>
        </>
    );
};
