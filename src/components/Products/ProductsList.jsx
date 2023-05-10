import "./ProductsList.css"

export function ProductsList({ products }) {
   return ( <div className="products">
        {
            products.map((product, id) => {
                return (
                    <div
                        key={'product/' + id}
                        id={product.id}
                        className="products-item"
                    >
                        {product.text}
                    </div>
                )
            })
        }
    </div>)
}