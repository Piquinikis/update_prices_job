import IPricingRule, { Pricing } from "../contracts/PricingRule";
import {checkingPrice} from "../utils/pricing";

export default class FullCoverage implements IPricingRule{
    update(current: Pricing): Pricing {
        let sellIn = current.sellIn - 1,
            newPrice: number = current.price + 1;

        if (sellIn < 0) {
            newPrice = current.price + 2;
        }

        return {
            price: checkingPrice(newPrice),
            sellIn: sellIn,
        };
    }
}
