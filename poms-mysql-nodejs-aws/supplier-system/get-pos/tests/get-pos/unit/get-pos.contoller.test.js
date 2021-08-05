const getPosController = require('../../../controllers/supplier.controller');
const suppierModel = require('../../../models');
const httpMocks = require('node-mocks-http');
const allPos = require('../mock-data/pos.json');

suppierModel.purchase_order.findAll = jest.fn();

let req, res;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});

describe("getPosController.getPO", () => {
    it("should have a getPO function", () => {
        expect(typeof getPosController.getPO).toBe("function");
    });
    it("should call suppierModel.purchase_order.findAll()", async() => {
        await getPosController.getPO(req, res);
        expect(suppierModel.purchase_order.findAll).toHaveBeenCalledWith();
    });
    it("should return json in response", async() => {
        suppierModel.purchase_order.findAll.mockReturnValue(allPos);
        await getPosController.getPO(req, res);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should return response with status 200", async() => {
        suppierModel.purchase_order.findAll.mockReturnValue(allPos);
        await getPosController.getPO(req, res);
        expect(res.statusCode).toBe(200);
    });
    it("should return response all pos", async() => {
        suppierModel.purchase_order.findAll.mockReturnValue(allPos);
        await getPosController.getPO(req, res);
        expect(res._getJSONData()).toStrictEqual(allPos);
    });
});