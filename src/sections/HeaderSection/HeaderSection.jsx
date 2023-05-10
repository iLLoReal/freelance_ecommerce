import { useState } from "react";
import "./HeaderSection.css";
import { Banner } from "../BannerSection/BannerSection";
import { Navigation } from "../../components/Navigation/Navigation";

export function HeaderSection() {
    const [links, setLinks] = useState([
        { id: 'seating', text: 'Seating' },
        { id: 'livingRoom', text: 'Living Room' },
        { id: 'outdoor', text: 'Outdoor' },
        { id: 'bedroom', text: 'Bedroom' },
        { id: 'storage', text: 'Storage' },
    ])

    return (
        <>
            <header id="top" className="header">
                <Navigation menuItems={links} />
                <Banner />
            </header>
        </>
    )
}