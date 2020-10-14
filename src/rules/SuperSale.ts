import IPricingRule, { Pricing } from "../contracts/PricingRule";
import {checkingPrice, degradePrice} from "../utils/pricing";

export default class SuperSale implements IPricingRule{
    update(current: Pricing): Pricing {
        const sellIn: number = current.sellIn - 1,
            newPrice = degradePrice(sellIn, current.price, 2);

        return {
            price: checkingPrice(newPrice),
            sellIn,
        };
    }
}
