import isPalindrome from "./isPalindrome";

describe("isPalindrome", () => {
	test("Returns true for 'racecar'", () => {
		expect(isPalindrome("racecar")).toBe(true);
	});

	test("Returns false for 'pizza'", () => {
		expect(isPalindrome("pizza")).toBe(false);
	});

	// Fix the code in isPalindrome.js to make this test pass!
	// DO NOT ALTER THIS TEST.
	test("Returns true for 'Anna', despite capitalization differences", () => {
		expect(isPalindrome("Anna")).toBe(true);
	});

	// Fix the code in isPalindrome.js to make this test pass!
	// DO NOT ALTER THIS TEST.
	test ("Returns false for an empty string", () => {
		expect(isPalindrome("")).toBe(false);
	});

	// Write your own test: Make sure it detects palindromes even if they're
	// multiple words!
	// Examples: https://www2.cs.arizona.edu/icon/oddsends/palinsen.htm
});
