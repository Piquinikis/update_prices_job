import IPricingRule, { Pricing } from "../contracts/PricingRule";
import { checkingPrice } from "../utils/pricing";

export default class SpecialFullCoverage implements IPricingRule{
    update(current: Pricing): Pricing {
        let newPrice: number = current.price + 1,
            sellIn = current.sellIn - 1;

        if (sellIn <= 10 && sellIn > 5) {
            newPrice = current.price + 2;
        }

        if (sellIn <= 5 && sellIn >= 0) {
            newPrice = current.price + 3;
        }

        if (sellIn < 0) {
            newPrice = 0;
        }

        return {
            price: checkingPrice(newPrice),
            sellIn: sellIn,
        };
    }
}
