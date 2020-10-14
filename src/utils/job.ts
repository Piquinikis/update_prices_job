import ICarInsurance from "../contracts/CarInsurance";

export default function runJob(days: number, carInsurance: ICarInsurance): ICarInsurance {
    const productPrinter = (product) => {
        console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
    };

    for (let i = 1; i <= days; i += 1) {
        console.log(`Day ${i}`);
        console.log('name, sellIn, price');
        carInsurance.updatePrices().forEach(productPrinter);
        console.log('');
    }

    return carInsurance;
}
