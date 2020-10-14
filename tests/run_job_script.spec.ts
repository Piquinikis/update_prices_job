import CarInsurance from "../src/CarInsurance";
import Product from "../src/Product";
import {assert} from "chai";
import IProduct from "../src/contracts/Product";
import runJob from "../src/utils/job";

describe('Run a job with different products', () => {
   it('run after five days', () => {
      let products: IProduct[] = [
         new Product('Medium Coverage', 10, 20),
         new Product('Full Coverage', 2, 0),
         new Product('Low Coverage', 5, 7),
      ];

      const carInsurance = new CarInsurance(products);

      runJob(1, carInsurance);

      assert.equal(products[0].price, 19);
      assert.equal(products[0].sellIn, 9);
      assert.equal(products[1].price, 1);
      assert.equal(products[1].sellIn, 1);
      assert.equal(products[2].price, 6);
      assert.equal(products[2].sellIn, 4);
   });
});
