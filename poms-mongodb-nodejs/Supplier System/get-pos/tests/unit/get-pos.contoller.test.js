const getPosController = require('../../controllers/get-pos.controller');
const suppierModel = require('../../models/supplier.model');
const httpMocks = require('node-mocks-http');
const allPos = require('../mock-data/pos.json');

suppierModel.find = jest.fn();

let req, res;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});


describe("getPosController.getPO", () => {
    it("should have a createItem function", () => {
        expect(typeof getPosController.getPO).toBe("function");
    });
    it("should call suppierModel.find()", async () => {
        await getPosController.getPO(req, res);
        expect(suppierModel.find).toHaveBeenCalledWith();
    });
    it("should return json in response", async () => {
        suppierModel.find.mockReturnValue(allPos);
        await getPosController.getPO(req, res);
        expect(res._isEndCalled()).toBeTruthy();
    });
    
    it("should return response with status 200", async () => {
        suppierModel.find.mockReturnValue(allPos);
        await getPosController.getPO(req, res);
        expect(res.statusCode).toBe(200);
    });
    it("should return response all pos", async () => {
        suppierModel.find.mockReturnValue(allPos);
        await getPosController.getPO(req, res);
        expect(res._getJSONData()).toStrictEqual(allPos);
    });
});
