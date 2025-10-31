import { getDictionary } from "@/dictionary";
import styles from "./About.module.css";

export default async function About({ params }) {
    const { locale } = await params;
    const dictionary = await getDictionary(locale);
    const images = [...Array(6)].map((_, index) => `https://picsum.photos/800/800?random=${index}`);

    return (
        <div className="container">
            <h2>{dictionary.AboutComponent.h2}</h2>
            <p>{dictionary.AboutComponent.description}</p>
            <div className={`flex ${styles.gallery} snap`}>
                {images.map((url, index) => (
                    <div className={styles["gallery-item"]} key={index}>
                        <img src={url} alt={`Random ${index}`}></img>
                    </div>
                ))}
            </div>
        </div>
    );
};
