const poAcceptanceController = require('../../../controllers/supplier.controller');
const suppierModel = require('../../../models');
const httpMocks = require('node-mocks-http');
const po = require('../mock-data/po.json');
const accept = require('../mock-data/accept.json');
const afterAccept = require('../mock-data/after-accept.json');

suppierModel.purchase_order.update = jest.fn();

let req, res;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});


describe("poAcceptanceController.poAcceptance", () => {
    it("should have a poAcceptance function", () => {
        expect(typeof poAcceptanceController.poAcceptance).toBe("function");
    });
    it("should return status code 200", async() => {
        suppierModel.purchase_order.update.mockReturnValue(po);
        await poAcceptanceController.poAcceptance(req, res);
        expect(res.statusCode).toEqual(200);
    });
});