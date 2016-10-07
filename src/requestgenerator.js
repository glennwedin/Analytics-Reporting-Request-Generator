/*
  Report-request-generator with support for the basic queries used against Analytics Reporting API V4
*/
module.exports = function() {
    var reportRequests = [],
        currentIndex = null;
    return {
        report() {
            reportRequests.push({});
            currentIndex = reportRequests.length - 1;
            return this;
        },
        viewId(id) {
            reportRequests[currentIndex]['viewId'] = id+"";
            return this;
        },
        dimension(dimension, type = "name") {
            var obj = {};
            obj[type] = dimension;
            if (!reportRequests[currentIndex].dimensions) {
                reportRequests[currentIndex].dimensions = []
            }
            reportRequests[currentIndex].dimensions.push(obj);
            return this;
        },
        metric(metric, type = "expression") {
            var obj = {};
            obj[type] = metric;
            if (!reportRequests[currentIndex].metrics) {
                reportRequests[currentIndex].metrics = []
            }
            reportRequests[currentIndex].metrics.push(obj);
            return this;
        },
        filtersExpression(expression) {
            reportRequests[currentIndex].filtersExpression = expression;
            return this;
        },
        dateRanges(startDate, endDate) {
            if(!reportRequests[currentIndex].dateRanges) {
                reportRequests[currentIndex].dateRanges = []
            }
            let dateObj = {startDate, endDate}
            reportRequests[currentIndex].dateRanges.push(dateObj);
            return this;
        },
        orderBys(fieldName, sortOrder) {
            if(!reportRequests[currentIndex].orderBys) {
                reportRequests[currentIndex].orderBys = []
            }
            let orderObject = {fieldName, sortOrder}
            reportRequests[currentIndex].orderBys.push(orderObject)

            return this;
        },
        get() {
            let result = {
                reportRequests: reportRequests
            }
            return result;
        },
        getJson() {
            return JSON.stringify(this.get());
        }
    }
}
