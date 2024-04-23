describe("Invoice Controller", () => {
    
    describe("Create invoice", () => {
        let invoiceController;
        let invoiceService;
        beforeEach(() => {
            invoiceService = require("../service/invoiceService");
            invoiceController = require("./invoiceController")
        })

        it("TEST 1", async() => {
            const req = {
                body: {
                    invoiceNumber: "FACT2024006",
                    title: "Concéption Logo",
                    amount: "500",
                    clientd: 2
                }
            } 


            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            const mockBody = {
                invoiceNumber: "FACT2024006",
                title: "Concéption Logo",
                amount: "500",
                clientId: 2
            }

            const createSpy = jest.spyOn(invoiceService, 'create').mockImplementationOnce((mockBody) => {
                return {
                    status: "success",
                    message: "Facture ajoutée avec succès"
                }
            });

            await invoiceController.createInvoice(req, res);

            expect(createSpy).toHaveBeenCalledWith(mockBody);
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({
                status: "success",
                message: "Facture ajoutée avec succès"
            });

        })

        it("TEST 2", async() => {
            const req = {
                body: {
                    invoiceNumber: "FACT2024006",
                    title: "Concéption Logo",
                    amount: "500",
                }
            } 


            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            };

            const mockBody = {
                invoiceNumber: "FACT2024006",
                title: "Concéption Logo",
                amount: "500",
            }

            const createSpy = jest.spyOn(invoiceService, 'create').mockImplementationOnce((mockBody) => {
                return {
                    sqlError: "error.message"
                }
            });

            await invoiceController.createInvoice(req, res);

            expect(createSpy).toHaveBeenCalledWith(mockBody);
            expect(res.status).toHaveBeenCalledWith(500);
        })
        
    })
})


