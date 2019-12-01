'use strict';

const { test } = require('tap');
const index = require('./index');

test('Index() - test', (t) => {
    t.equal(index.foo(), 42, '.value should be 42');
    t.end();
});
