import IPricingRule from "../contracts/PricingRule";
import FullCoverage from "./FullCoverage";
import MegaCoverage from "./MegaCoverage";
import SpecialFullCoverage from "./SpecialFullCoverage";
import SuperSale from "./SuperSale";
import { FULL_COVERAGE, MEGA_COVERAGE, SPECIAL_FULL_COVERAGE, SUPER_SALE } from '../utils/constants';
import LowCoverage from "./LowCoverage";

export class RuleFactory {
    getRuleFor(productName: string): IPricingRule {
        switch (productName) {
            case FULL_COVERAGE:
                return new FullCoverage();
            case MEGA_COVERAGE:
                return new MegaCoverage();
            case SPECIAL_FULL_COVERAGE:
                return new SpecialFullCoverage();
            case SUPER_SALE:
                return new SuperSale();
            default:
                return new LowCoverage();
        }
    }
}
