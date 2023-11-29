import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { add, fibs } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function fibsTest() {
  assertEquals(fibs(8), [0, 1, 1, 2, 3, 5, 8, 13]);
});
