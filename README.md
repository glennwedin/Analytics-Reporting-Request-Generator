# Analytics-Reporting-Request-Generator

An object containing chainable functions for generating JSON used for creating
requests towards Google Analytics Reporting API V4.

**Usage:**
```
let requestsGen = require("analytics-reporting-request-generator");
request = requestsGen().report().viewId('12345678').dimension('ga:dimension1').metric('ga:metric1').metric('ga:metric2').dateRanges(startDate, endDate).filtersExpression('ga:dimension3==apagetitleperhaps').orderBys('ga:metric1', 'DESCENDING').get();
```

## Methods

  **report()**

    Create a new report

  **viewId(id)**

    Add a Google analytics viewId for fetching data.

  **dimension(dimension, type)** //type defaults to name

    Add a Google analytics dimension

  **metric(metric, type)** //type defaults to expression

    Add a Google analytics metric

  **filtersExpression(expression)**

    Filter the data using filtersExpression

  **dateRanges(startDate, endDate)** //in the ISO-date format

    Add a dateStart and a dateEnd

  **orderBys(fieldName, sortOrder)**

    Sort data by a dimension

  **get()**

    Return the javascript object

  **getJson()**

    Return a json object
