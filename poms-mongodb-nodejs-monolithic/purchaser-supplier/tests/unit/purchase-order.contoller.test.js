const PoController = require('../../controllers/purchase-order.controller');
const PoModel = require('../../models/purchase-order.model');
const httpMocks = require('node-mocks-http');
// const poObj = require('../mock-data/po.json');
const itemModel = require('../../models/item.model');

describe("PoController.create", () => {
    it("should have a createItem function", () => {
        expect(typeof PoController.createPO).toBe("function");
    });
    
});
