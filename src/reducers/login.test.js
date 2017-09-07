import loginReducer from "./login";

// Reusable states
const initState = loginReducer(undefined, {});
const loadingState = {
	...initState,
	isLoading: true,
};
const errorState = {
	...initState,
	error: "Something bad happened!",
};

describe("login reducer", () => {
	describe("LOGIN_START", () => {
		test("should mark state as isLoading", () => {
			const newState = loginReducer(initState, { type: "LOGIN_START" });
			expect(newState.isLoading).toBe(true);
		});

		// Fix the code in login.js to make this test pass!
		// DO NOT ALTER THIS TEST.
		test("should remove the error, if there was one", () => {
			const newState = loginReducer(errorState, { type: "LOGIN_START" });
			expect(newState.error).toBeNull();
		});
	});

	// -------------------------------------------------------------------------

	describe("LOGIN_SUCCESS", () => {
		test("should mark state as not isLoading", () => {
			const newState = loginReducer(loadingState, {
				type: "LOGIN_SUCCESS",
				user: "somebody",
			});
			expect(newState.isLoading).toBe(false);
		});

		test("should set the user on state", () => {
			const newState = loginReducer(initState, {
				type: "LOGIN_SUCCESS",
				user: "test",
			});
			expect(newState.user).toBe("test");
		});
	});

	// -------------------------------------------------------------------------

	describe("LOGIN_FAILURE", () => {
		// Fix the code in login.js to make this test pass!
		// DO NOT ALTER THIS TEST.
		test("should mark state as not isLoading", () => {
			const newState = loginReducer(loadingState, {
				type: "LOGIN_FAILURE",
				error: "Stuff broke",
			});
			expect(newState.isLoading).toBe(false);
		});

		test("should set the error on state", () => {
			const newState = loginReducer(initState, {
				type: "LOGIN_FAILURE",
				error: "test",
			});
			expect(newState.error).toBe("test");
		});
	});
});
