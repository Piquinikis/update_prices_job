export default interface IProduct {
    sellIn: number
    name: string
    price: number

    refreshPrice(): IProduct
}
