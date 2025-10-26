import Landscape from "./components/Landscape";
import ToursCatalog from "./components/ToursCatalog";

export default function HomePage({ params }) {
    return(
        <>
            <Landscape></Landscape>
            <section>
                <ToursCatalog params={params}></ToursCatalog>
            </section>
        </>
    )
};
