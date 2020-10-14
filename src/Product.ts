import IProduct from "./contracts/Product";
import IPricingRule from "./contracts/PricingRule";
import {RuleFactory} from "./rules/Factory";

export default class Product implements IProduct {
    name: string;
    price: number;
    pricingRule: IPricingRule;
    sellIn: number;

    constructor(name: string, sellIn: number, price: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.price = price;
    }

    refreshPrice(): IProduct {
        const factory = new RuleFactory();
        this.pricingRule = factory.getRuleFor(this.name);

        const newPrice = this.pricingRule.update({ price: this.price, sellIn: this.sellIn });
        this.price = newPrice.price;
        this.sellIn = newPrice.sellIn;

        return this;
    }
}
