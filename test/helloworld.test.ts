import { hello } from "../src/helloworld";

describe("hello,World!のテスト", () => {
	// test-01
	test("hello,World!になる", () => {
    const world = "World";
    const expected = hello(world);
    expect(expected).toBe("Hello, World!");
  });

	// test-02
	test("hello,World2!になる", () => {
    const world = "World2";
    const expected = hello(world);
    expect(expected).toBe("Hello, World2!");
  });

});
