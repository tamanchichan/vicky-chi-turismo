import Landscape from "./components/Landscape";
import ToursCatalog from "./components/ToursCatalog";

export default function HomePage({ params }) {
    return(
        <section>
            <Landscape></Landscape>
            <ToursCatalog params={params}></ToursCatalog>
        </section>
    )
};
