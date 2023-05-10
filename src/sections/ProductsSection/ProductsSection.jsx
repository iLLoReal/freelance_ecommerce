import { useState } from "react";
import { BackToTop } from "../../components/BackToTop";
import { ProductsList } from "../../components/Products/ProductsList";
import { ProductsLabel } from "../../components/Products/ProductsLabel/ProductsLabel";

import "./ProductsSection.css";

export function ProductsSection() {
    const [products, setProducts] = useState([
        { id: 'seating', text: 'Seating' },
        { id: 'livingRoom', text: 'Living Room' },
        { id: 'outdoor', text: 'Outdoor' },
        { id: 'bedroom', text: 'Bedroom' },
        { id: 'storage', text: 'Storage' },
    ])
    return (
        <>
            <section className="products-container">
                <ProductsLabel />
                <ProductsList products={products} />
                <BackToTop/>
            </section>
        </>
    )
}