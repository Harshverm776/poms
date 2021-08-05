const PoController = require('../../controllers/create-po.controller');
const PoModel = require('../../models/purchase-order.model');
const httpMocks = require('node-mocks-http');
const po = require('../mock-data/po.json');

PoModel.create = jest.fn();
PoModel.save = jest.fn();

let req, res;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});

describe("PoController.createPO", () => {
    it("should have a createPo function", () => {
        expect(typeof PoController.createPO).toBe("function");
    });
    it("should return json body in response", async () => {
        PoModel.create.mockReturnValue(po);
        PoController.createPO(req, res);
        expect(res._getJSONData()).toBeTruthy();
    });
    it("should send response", () => {
        PoController.createPO(req, res);
        expect(res._isEndCalled()).toBeTruthy();
    });
});
