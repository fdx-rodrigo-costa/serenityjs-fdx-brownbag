import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { inspect } from "util";
import chaiArrays from "chai-arrays";
import chaiFS from "chai-fs";

chai
  .use(chaiFS)
  .use(chaiArrays)
  .use(chaiAsPromised);

chai.config.includeStack = true; // turn on stack trace

export const expect = chai.expect;

// EXPECTATIONS
export const include = (expected: any) => (
  actual: PromiseLike<any[]>
): PromiseLike<void> => expect(actual).to.eventually.include(expected),
  includeIgnoringCase = (expected: any) => (
    actual: PromiseLike<any[]>
  ): PromiseLike<void> =>
    expect(
      actual.then(array => array.map(value => value.toLowerCase()))
    ).to.eventually.include(expected.toLowerCase()),
  allItensContainingStringIgnoringCase = (expected: string) => (
    actual: PromiseLike<any[]>
  ): PromiseLike<void> =>
    actual.then(array => {
      return array.forEach(item => {
        return expect(
          item.toLowerCase(),
          `array should contains an item that contains a string ignoring case: '${expected}'`
        ).to.contains(expected.toLowerCase());
      });
    }),
  isSortedAlphabetically = () => (
    actual: PromiseLike<any[]>
  ): PromiseLike<any> => actual.then(array => expect(array).to.be.sorted()),
  haveLenghtOf = (size: number) => (
    actual: PromiseLike<any[]>
  ): PromiseLike<any> =>
    actual.then(array => expect(array).to.have.lengthOf(size)),
  deepInclude = (expected: any) => (
    actual: PromiseLike<any[]>
  ): PromiseLike<void> => expect(actual).to.eventually.deep.include(expected),
  haveDeepMembers = (expected: any) => (
    actual: PromiseLike<any[]>
  ): PromiseLike<void> =>
    actual.then(actualValue => {
      expect(
        actualValue,
        `${inspect(actualValue)} should have same members as:\n${inspect(
          expected
        )}\n`
      ).to.have.deep.members(expected);
    }),
  includeAllOf = (expected: any[]) => (
    actual: PromiseLike<any[]>
  ): PromiseLike<void> =>
    expect(actual).to.eventually.include.members(expected),
  areEqualToIgnoringCase = (expected: string) => (
    actual: PromiseLike<string[]>
  ): PromiseLike<void> =>
    actual.then(array => {
      return array.forEach(i =>
        expect(
          i.toLowerCase(),
          `expected all elements of ${inspect(
            array
          )} to be equal to '${expected.toLowerCase()}' but the element at position [${array.indexOf(
            i
          )}] was '${i.toLowerCase()}'`
        ).to.be.equal(expected.toLowerCase())
      );
    }),
  equalsIgnoringCase = (expected: string) => (
    actual: PromiseLike<string>
  ): PromiseLike<void> =>
    expect(actual.then(value => value.toLowerCase())).to.eventually.equal(
      expected.toLowerCase()
    ),
  equals = (expected: any) => (actual: PromiseLike<any>): PromiseLike<void> =>
    expect(actual).to.eventually.be.equal(expected),
  containsIgnoringCase = (expected: string) => (
    actual: PromiseLike<string>
  ): PromiseLike<void> =>
    expect(actual.then(value => value.toLowerCase())).to.eventually.include(
      expected.toLowerCase()
    );

chai.use(function (chaia, util) {
  chaia.Assertion.addMethod("lastElement", function (expected) {
    const obj = this._obj;
    const fn = this;
    return obj.then(array => {
      return fn.assert(
        array[array.length - 1] === expected,
        `expected ${inspect(
          array
        )} to have the last element equal to '${expected}'`,
        expected, // expected
        array
      );
    });
  });
});
