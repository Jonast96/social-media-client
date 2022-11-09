// import { login } from "./login";

// const validEmail = "testing@noroff.no";
// const invalidEmail = "thisnoworking@xd.no";
// const password = "thisismorethan8";
// const token = "asdas222314asdasdsag55343";

// const profile = {
//   name: "Jon",
//   email: validEmail,
// };

// function fetchSuccess(status = 201, statusText = "success") {
//   return Promise.resolve({
//     ok: true,
//     status,
//     statusText,
//     json: () => Promise.resolve({ ...profile, token }),
//   });
// }

// function fetchFailure(status = 404, statusText = "failed") {
//   return Promise.resolve({
//     ok: false,
//     status,
//     statusText,
//   });
// }

// describe("login", () => {
//   it("returns a valid access token in local storage and valid response object", async () => {
//     global.fetch = jest.fn(() => fetchSuccess());
//     const data = await login(validEmail, password);
//     expect(validEmail).toMatch("@noroff.no");
//     expect(password).toHaveLength(8);
//     expect(data.token).toEqual(token);
//   });

//   it("throws an error when provided with invalid credentials", async () => {
//     global.fetch = jest.fn(() => fetchFailure());
//     await expect(login(invalidEmail, password)).rejects.toThrow("failed");
//   });
// });
