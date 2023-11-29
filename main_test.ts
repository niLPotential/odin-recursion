import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { fibs, fibsRec } from "./main.ts";

Deno.test(function fibsTest() {
  assertEquals(fibs(1), [0]);
  assertEquals(fibs(2), [0, 1]);
  assertEquals(fibs(8), [0, 1, 1, 2, 3, 5, 8, 13]);
});

Deno.test(function fibsRecTest() {
  assertEquals(fibsRec(1), [0]);
  assertEquals(fibsRec(2), [0, 1]);
  assertEquals(fibsRec(8), [0, 1, 1, 2, 3, 5, 8, 13]);
});
