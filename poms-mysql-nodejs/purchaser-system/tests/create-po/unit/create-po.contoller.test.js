const PoController = require('../../../controllers/purchase-order.controller');
const PoModel = require('../../../models');
const httpMocks = require('node-mocks-http');
const po = require('../mock-data/po.json');

PoModel.purchase_order.create = jest.fn();

let req, res;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});

describe("PoController.createPO", () => {
    it("should have a createPo function", () => {
        expect(typeof PoController.createPO).toBe("function");
    });
    it("should send response code 200", () => {
        PoModel.purchase_order.create.mockReturnValue(po);
        PoController.createPO(req, res);
        expect(res.statusCode).toEqual(200);
    });
});