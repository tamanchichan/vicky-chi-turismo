import About from "./components/About";
import Landscape from "./components/Landscape";
import ToursCatalogSnap from "./components/ToursCatalogSnap";

export default function HomePage({ params }) {
    return(
        <>
            <Landscape></Landscape>
            <section>
                <ToursCatalogSnap params={params}></ToursCatalogSnap>
            </section>
            <section>
                <About params={params}></About>
            </section>
        </>
    )
};
