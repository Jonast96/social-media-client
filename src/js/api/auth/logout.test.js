import { logout } from "./logout";

const user = {
  username: "jon",
  userEmail: "jon@noroff.no",
  userToken: "dasew2w21312yhg3t21uv31212312rfsf",
};
const { username, userEmail, userToken } = user;

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe("logout", () => {
  it("removes the token from localstorage so the user gets logged out", () => {
    localStorage.setItem("token", userToken);
    localStorage.setItem("profile", username + userEmail);
    logout();
    expect(localStorage.getItem("token")).toEqual(null);
    expect(localStorage.getItem("profile")).toEqual(null);
  });
});
