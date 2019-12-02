'use strict';

const foo = () => {
    const value = 41;
    const plus = 1;
    return value + plus;
};
module.exports.foo = foo;

const bar = () => {
    return 'beer';
};
module.exports.bar = bar;