// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-26
description: >
    Object.create - TypeError is thrown when own enumerable accessor
    property of 'Properties' without a get function (15.2.3.7 step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var props = {};
        Object.defineProperty(props, "prop", {
            set: function () { },
            enumerable: true
        });
        try {
            Object.create({}, props);

            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
