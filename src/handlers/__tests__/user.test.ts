import * as user from "../user";
describe("user handler", () => {
	it("Should do something when something happen", async () => {
		const req = { body: { username: "hellop", password: "hip" } };
		const res = {
			json: ({ token }) => {
				expect(token).toBeTruthy();
			},
		};
		await user.createNewUser(req, res, () => {});
	});
});
