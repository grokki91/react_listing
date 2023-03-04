export default function Listing({items}) {
    const checkCurrency = (currency) => {
        if (currency === 'USD') {
            return '$';
        } else if (currency === 'EUR') {
            return '€';
        } else {
            return currency;
        }
    }

    const checkQuantity = (quantity) => {
        if (quantity <= 10) {
            return 'item-quantity level-low';
        } else if (quantity <= 20) {
            return 'item-quantity level-medium';
        } else {
            return 'item-quantity level-high';
        }
    }

    return(
        <>
            {items.map((item) => {
                if (item.MainImage) {
                    return(
                        <div className="item-list" key={item.listing_id}>
                            <div className="item">
                                <div className="item-image">
                                <a href={item.url}>
                                    <img src={item.MainImage.url_570xN} alt="" />
                                </a>
                                </div>
                                <div className="item-details">
                                <p className="item-title">{item.title.length > 50 ? item.title.slice(50) : item.title}</p>
                                <p className="item-price">{checkCurrency(item.currency_code)}{item.price}</p>
                                <p className={checkQuantity(item.quantity)}>{item.quantity} left</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </>
    )
}

Listing.defaultProps = {items: []}