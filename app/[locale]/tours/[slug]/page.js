import { getDictionary, getTourDataDictionary } from "@/dictionary";
import styles from "./page.module.css";
import TourInfo from "../../components/TourInfo";

export default async function TourPage({ params }) {
    const { locale, slug } = await params;
    const dictionary = await getDictionary(locale);
    const tour = dictionary.ToursData.find(t => t.slug == slug);
    
    return (
        <>
            <section>
                <div className={`container ${styles["tour-cover"]}`}>
                    <h2>{tour.name}</h2>
                    <img src={`/${tour.img[0].src}`} alt={tour.img[0].alt}></img>
                </div>
                
            </section>
            <section>
                <div className={`container`}>
                    <h2>{dictionary.TourPage.h2}</h2>
                    {Object.values(tour.description).map((value, index) => (
                        <p key={index}>{value}</p>
                    ))}
                </div>
            </section>
                <section>
                    <TourInfo params={params}></TourInfo>
                </section>
        </>
    );
};
