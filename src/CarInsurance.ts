import ICarInsurance from "./contracts/CarInsurance";
import IProduct from "./contracts/Product";

export default class CarInsurance implements ICarInsurance {
    products: IProduct[];

    constructor(products: IProduct[]) {
        this.products = products;
    }

    updatePrices(): IProduct[] {
        return this.products.map((p: IProduct) => p.refreshPrice());
    }
}
