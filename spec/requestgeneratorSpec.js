var reportRequests = require('../src/requestgenerator');

describe("RequestGenerator", function() {
    it("should generate an empty report", function() {
        let report = reportRequests().report().get();
        expect(report.reportRequests).not.toBe("undefined");
        expect(report.reportRequests).toEqual([{}]);
    });
    it("should set a viewId", function() {
        let report = reportRequests().report().viewId(12345).get();
        expect(report.reportRequests[0].viewId).toBe("12345");
    });
    it("should set a dimension", function() {
        let report = reportRequests().report().dimension("ga:superdimension", 'name').dimension("ga:superdimension2", 'name').get();
        expect(report.reportRequests[0].dimensions[0]).toEqual({
            name: "ga:superdimension"
        });
        expect(report.reportRequests[0].dimensions[1]).toEqual({
            name: "ga:superdimension2"
        });
    });
    it("should set a metric in another report and be an expression", function() {
        let report = reportRequests().report().dimension("ga:superdimension", 'name').dimension("ga:superdimension2", 'name')
            .report().metric('ga:users').get();
        expect(report.reportRequests[1].metrics[0]).toEqual({
            expression: "ga:users"
        });
    });
    it("should set a filterExpression", function () {
        let report = reportRequests().report().filtersExpression("ga:metric2=~/v/").get();
        expect(typeof report.reportRequests[0].filtersExpression).toBe("string");
    })
    it("should be valid object and json", function() {
        let report = reportRequests().report().dimension("ga:superdimension", 'name').dimension("ga:superdimension2", 'name')
            .report().metric('ga:users');
        let json = report.getJson(),
            obj = report.get();
        expect(typeof obj).toBe("object");
        expect(typeof json).toBe("string");
        expect(typeof JSON.parse(json)).toBe("object");
    });
});
