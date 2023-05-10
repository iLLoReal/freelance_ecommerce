import { redirect } from "../../scripts/redirect";
import "./BannerSection.css";

export function Banner() {
    return (
        <>
            <section className="background-image">
                <div className="button-container">
                    <div className="button-label">Clever designs, delivered free</div>
                    <button onClick={redirect('#')} className="button">SHOP BEDROOM</button>
                </div>
            </section>
        </>
    )
}
