describe("Ivoice Controller functional test", () => {
    let app;
    let request;
    let invoiceService;

    beforeEach(() => {
        app = require("../../app");
        request = require("supertest")
        invoiceService = require("../../service/invoiceService");
    })

    it("Test fonctionnel", async () => {
        const invoiceData = {
            invoiceNumber: 'FACT2024009',
            title: 'Conception Logo',
            amount: 500,
            clientId: 2
        };

        const affectedRows = 1;

        

        invoiceService.create = jest.fn().mockReturnValue(affectedRows);

        const response = await request(app).post('/invoices')
        .send(invoiceData);

        expect(response.status).toBe(201);
        expect(response.body).toEqual({
            status: 'success',
            message: 'Facture ajoutée avec succès'
        });
        expect(invoiceService.create).toHaveBeenCalledWith(invoiceData);
    })
})