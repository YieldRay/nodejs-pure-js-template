import { test } from "node:test";
import * as assert from "node:assert";
import { add } from "./add.mjs";

test("test add()", async () => {
  assert.equal(add(1, 1), 2);
  assert.equal(add(1, -1), 0);
});
