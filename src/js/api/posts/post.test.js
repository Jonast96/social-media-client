import { createPost } from "../posts/create";

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

const test_item = { title: "Test", body: "Test" };

function fetchSuccess() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: "Success",
    json: () => Promise.resolve(test_item),
  });
}

function fetchFailure() {
  return Promise.resolve({
    ok: false,
    status: 404,
    statusText: "Error",
  });
}

describe("createPost", () => {
  it("sends data to api and creates a new post", async () => {
    global.fetch = jest.fn(() => fetchSuccess());
    const item = await createPost();
    expect(item).toEqual(test_item);
  });

  it("Throws error if it fails to create new item on the API", async () => {
    global.fetch = jest.fn(() => fetchFailure());
    await expect(createPost()).rejects.toThrow("Error");
  });
});
