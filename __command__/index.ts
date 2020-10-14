import runJob from "../src/utils/job";
import productsAtDayZero from "../__mocks__/productsAtDayZero";
import CarInsurance from "../src/CarInsurance";

const products = productsAtDayZero;
runJob(parseInt(process.argv[2]), new CarInsurance(products));
