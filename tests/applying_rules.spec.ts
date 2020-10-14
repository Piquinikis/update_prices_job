import { assert } from 'chai';
import Product from "../src/Product";
import { FULL_COVERAGE, MEGA_COVERAGE, SPECIAL_FULL_COVERAGE, SUPER_SALE } from '../src/utils/constants';

describe('Applying different pricing rules', () => {
    it('low coverage rule', () => {
        let product = new Product('Low Coverage', 10, 30);
        product.refreshPrice();

        assert.equal(product.price, 29);
        assert.equal(product.sellIn, 9);

        product = new Product('Low Coverage', 0, 15);
        product.refreshPrice();

        assert.equal(product.price, 13);
        assert.equal(product.sellIn, -1);

        product = new Product('Low Coverage', 0, 1);
        product.refreshPrice();

        assert.equal(product.price, 0);
        assert.equal(product.sellIn, -1);
    });

    it('full coverage product', () => {
        let product = new Product(FULL_COVERAGE, 2, 0);
        product.refreshPrice();

        assert.equal(product.price, 1);
        assert.equal(product.sellIn, 1);

        product.refreshPrice();

        assert.equal(product.price, 2);
        assert.equal(product.sellIn, 0);

        product.refreshPrice();

        assert.equal(product.price, 4);
        assert.equal(product.sellIn, -1);
    });

    it('special full coverage product', () => {
        let product = new Product(SPECIAL_FULL_COVERAGE, 14, 21);

        product.refreshPrice();

        assert.equal(product.price, 22);
        assert.equal(product.sellIn, 13);

        product.refreshPrice();

        assert.equal(product.price, 23);
        assert.equal(product.sellIn, 12);

        product = new Product(SPECIAL_FULL_COVERAGE, 10, 48);

        product.refreshPrice();

        assert.equal(product.price, 50);
        assert.equal(product.sellIn, 9);

        product.refreshPrice();

        assert.equal(product.price, 50);
        assert.equal(product.sellIn, 8);

        product.refreshPrice();

        assert.equal(product.price, 50);
        assert.equal(product.sellIn, 7);

        product = new Product(SPECIAL_FULL_COVERAGE, 2, 40);

        product.refreshPrice();

        assert.equal(product.price, 43);
        assert.equal(product.sellIn, 1);

        product.refreshPrice();

        assert.equal(product.price, 46);
        assert.equal(product.sellIn, 0);

        product.refreshPrice();

        assert.equal(product.price, 0);
        assert.equal(product.sellIn, -1);

    });

    it('mega coverage product', () => {
        let product = new Product(MEGA_COVERAGE, 10, 80);
        product.refreshPrice();

        assert.equal(product.price, 80);
        assert.equal(product.sellIn, 10);

        product.refreshPrice();

        assert.equal(product.price, 80);
        assert.equal(product.sellIn, 10);

        product = new Product(MEGA_COVERAGE, 1, 40);
        product.refreshPrice();

        assert.equal(product.price, 80);
        assert.equal(product.sellIn, 1);

        product.refreshPrice();

        assert.equal(product.price, 80);
        assert.equal(product.sellIn, 1);
    });

    it('super sale coverage product', () => {
        let product = new Product(SUPER_SALE, 2, 30);

        product.refreshPrice();

        assert.equal(product.price, 28);
        assert.equal(product.sellIn, 1);

        product.refreshPrice();

        assert.equal(product.price, 26);
        assert.equal(product.sellIn, 0);

        product.refreshPrice();

        assert.equal(product.price, 22);
        assert.equal(product.sellIn, -1);
    });
});
