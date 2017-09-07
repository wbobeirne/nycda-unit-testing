import Validators from "./validators";

describe("Validators", () => {
	describe("isValidFullName", () => {
		test("should be false if name isn't more than 2 words", () => {
			expect(Validators.isValidFullName("John")).toBe(false);
		});

		test("should be false if name contains numbers", () => {
			expect(Validators.isValidFullName("John 123 Smith")).toBe(false);
		});

		test("should be true if name is 2 words", () => {
			expect(Validators.isValidFullName("John Smith")).toBe(true);
		});

		test("should be true if name is 3 words", () => {
			expect(Validators.isValidFullName("John Johnny Smith")).toBe(true);
		});
	});

	// -------------------------------------------------------------------------

	describe("isValidEmail", () => {
		test("should be false if email doesn't contain @ symbol", () => {
			expect(Validators.isValidEmail("willatgmail.com")).toBe(false);
		});

		test("should be false if email doesn't contain . symbol", () => {
			expect(Validators.isValidEmail("will@gmaildotcom")).toBe(false);
		});

		test("should be true if email contains @ and . symbols", () => {
			expect(Validators.isValidEmail("will@gmail.com")).toBe(true);
		});
	});

	// -------------------------------------------------------------------------

	describe("isValidPassword", () => {
		test("should be false if password contains less than 6 characters", () => {
			expect(Validators.isValidPassword("Short")).toBe(false);
		});

		test("should be false if password is all lowercase", () => {
			expect(Validators.isValidPassword("lowercaseyo")).toBe(false);
		});

		test("should be true if password has uppercase and is longer than 6", () => {
			expect(Validators.isValidPassword("IamAgoodPassword")).toBe(true);
		});
	});
});
