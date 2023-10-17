import assert from 'assert';
import jsep, { MemberExpression } from 'jsep';

const expression = jsep("[1, 2, 3][]") as MemberExpression;
assert(expression.type === 'MemberExpression');

// Typescript reports the error `This comparison appears to be unintentional because the types 'Expression' and 'boolean' have no overlap`
// Yet expression.property is, in fact, false
assert(expression.property === false);
