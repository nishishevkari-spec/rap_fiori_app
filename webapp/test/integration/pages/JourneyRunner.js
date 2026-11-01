sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"nishi/tr/man/travelmanaged/test/integration/pages/travelList.gen",
	"nishi/tr/man/travelmanaged/test/integration/pages/travelObjectPage.gen",
	"nishi/tr/man/travelmanaged/test/integration/pages/bookingObjectPage.gen"
], function (JourneyRunner, travelListGenerated, travelObjectPageGenerated, bookingObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('nishi/tr/man/travelmanaged') + '/test/flp.html#app-preview',
        pages: {
			onThetravelListGenerated: travelListGenerated,
			onThetravelObjectPageGenerated: travelObjectPageGenerated,
			onThebookingObjectPageGenerated: bookingObjectPageGenerated
        },
        async: true
    });

    return runner;
});

