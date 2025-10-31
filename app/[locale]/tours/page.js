import Link from "next/link";
import styles from "./page.module.css";
import { getDictionary } from "@/dictionary";

export default async function Tours({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    const tours = dictionary.ToursComponent;
    
    return(
        <div className="container">
            <h2>{dictionary.ToursPage.h2}</h2>
            <div className={`${styles["tours"]}`}>
                {tours.map((tour, index) => (
                    <div className={`container ${styles["tour"]}`} key={index}>
                        <Link href={`/${locale}/tours/${tour.slug}`}>
                            <img src={`/${tour.img}`} alt={tour.name}></img>
                            <h3>{tour.name}</h3>
                            <p>{tour.description}</p>
                            {/* <button>See the tour</button> */}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}