const getPosController = require('../../../controllers/purchase-order.controller');
const PoModel = require('../../../models');
const httpMocks = require('node-mocks-http');
const AllPos = require('../mock-data/pos.json');

PoModel.purchase_order.findAll = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
});


describe("getPosController.getPO", () => {
    it("should have a createItem function", () => {
        expect(typeof getPosController.getPO).toBe("function");
    });
    it("should call PoModel.findAll()", async() => {
        await getPosController.getPO(req, res);
        expect(PoModel.purchase_order.findAll).toHaveBeenCalledWith();
    });
    it("should return json in response", async() => {
        PoModel.purchase_order.findAll.mockReturnValue(AllPos);
        await getPosController.getPO(req, res);
        expect(res._isEndCalled()).toBeTruthy();
    });

    it("should return response with status 200", async() => {
        PoModel.purchase_order.findAll.mockReturnValue(AllPos);
        await getPosController.getPO(req, res);
        expect(res.statusCode).toBe(200);
    });
    it("should return response all pos", async() => {
        PoModel.purchase_order.findAll.mockReturnValue(AllPos);
        await getPosController.getPO(req, res);
        expect(res._getJSONData()).toStrictEqual(AllPos);
    });

    // it("should handle errors in getPos", async () => {
    //     const errorMessage = { message: "Some error" };
    //     const rejectedPromise = Promise.reject(errorMessage);
    //     getPosController.find.mockReturnValue(rejectedPromise);
    //     await getPosController.getPO(req, res);
    //     expect(res._getJSONData()).toStrictEqual(errorMessage);
    // });
});