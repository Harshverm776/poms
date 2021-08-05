const poAcceptanceController = require('../../controllers/po-acceptance.controller');
const suppierModel = require('../../models/supplier.model');
const httpMocks = require('node-mocks-http');
const po = require('../mock-data/po.json');
const accept = require('../mock-data/accept.json');
const afterAccept = require('../mock-data/after-accept.json');

suppierModel.findById = jest.fn();
suppierModel.save = jest.fn();

let req, res;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});


describe("poAcceptanceController.updatePoStatus", () => {
    it("should have a poAcceptance function", () => {
        expect(typeof poAcceptanceController.poAcceptance).toBe("function");
    });
    it("should return response", async () => {
        suppierModel.findById.mockReturnValue(po);
        await poAcceptanceController.poAcceptance(req, res);
        expect(res._isEndCalled()).toBeTruthy();
    });
    it("should return a Json response", async () => {
        await poAcceptanceController.poAcceptance(req, res);
        expect(res._getJSONData()).toBeTruthy();
    });
});
