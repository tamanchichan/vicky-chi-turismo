import About from "./components/About";
import Contact from "./components/Contact";
import Landscape from "./components/Landscape";
import ToursCatalogSnap from "./components/ToursCatalogSnap";
import styles from "./page.module.css";

export default function HomePage({ params }) {
    return (
        <>
            <Landscape></Landscape>
            <section>
                <ToursCatalogSnap params={params}></ToursCatalogSnap>
            </section>
            <section>
                <About params={params}></About>
            </section>
            <section className={styles["contact-section"]}>
                <Contact params={params}></Contact>
            </section>
        </>
    );
};
