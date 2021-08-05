const updatePoController = require('../../../controllers/purchase-order.controller');
const PoModel = require('../../../models');
const httpMocks = require('node-mocks-http');
const po = require('../mock-data/po.json');
const approve = require('../mock-data/approve.json');
const afterApprove = require('../mock-data/after-approve.json');

PoModel.purchase_order.update = jest.fn();

let req, res;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
});


describe("updatePoController.updatePoStatus", () => {
    it("should have a updatePoStatus function", () => {
        expect(typeof updatePoController.updatePoStatus).toBe("function");
    });
    it("should return status code 200", async() => {
        PoModel.purchase_order.update.mockReturnValue(po);
        await updatePoController.updatePoStatus(req, res);
        expect(res.statusCode).toEqual(200);
    });

    // it("should return a response with json data", async () => {
    //     req.params.id = "60d081a420e6551f300b859a"; 
    //     PoModel.findById.mockReturnValue(po);
    //     PoModel.save.mockReturnValue(afterApprove);
    //     req.body = approve;
    //     await updatePoController.updatePoStatus(req, res);
    //     expect(res._isEndCalled()).toBeTruthy();
    //     expect(res.statusCode).toBe(200);
    // });
});