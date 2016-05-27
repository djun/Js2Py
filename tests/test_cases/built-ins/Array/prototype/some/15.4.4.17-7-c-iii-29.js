// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.17-7-c-iii-29
description: >
    Array.prototype.some - return value (new Boolean(false)) of
    callbackfn is treated as true value
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn() {
            return new Boolean(false);
        }

        return [11].some(callbackfn);
    }
runTestCase(testcase);