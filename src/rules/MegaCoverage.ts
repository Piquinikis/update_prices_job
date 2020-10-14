import IPricingRule, { Pricing } from "../contracts/PricingRule";

export default class MegaCoverage implements IPricingRule{
    update(current: Pricing): Pricing {
        return {
            price: 80,
            sellIn: current.sellIn,
        };
    }
}
