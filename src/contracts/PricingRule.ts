export type Pricing = {
    price: number,
    sellIn: number
}

export default interface IPricingRule {
    update(current: Pricing): Pricing;
}
