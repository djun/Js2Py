// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.8-2-a-9
description: >
    Object.seal - 'P' is own property of a String object which
    implements its own [[GetOwnProperty]]
includes: [runTestCase.js]
---*/

function testcase() {
        var strObj = new String("abc");

        strObj.foo = 10; // default [[Configurable]] attribute value of foo: true
        var preCheck = Object.isExtensible(strObj);
        Object.seal(strObj);

        delete strObj.foo;
        return preCheck && strObj.foo === 10;
    }
runTestCase(testcase);
