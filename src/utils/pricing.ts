export function degradePrice(sellIn: number, price: number, ratio: number = 1): number {
    if (sellIn < 0) {
        return price - (2 * ratio);
    }

    return price - ratio;
}

export function checkingPrice(price: number): number {
    if (price > 50) {
        return 50;
    }

    if (price < 0) {
        return 0;
    }

    return price;
}
