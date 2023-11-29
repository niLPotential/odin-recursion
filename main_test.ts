import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { fibs, fibsRec } from "./main.ts";

Deno.test(function fibsTest() {
  assertEquals(fibs(1), [0]);
  assertEquals(fibs(2), [0, 1]);
  assertEquals(fibs(8), [0, 1, 1, 2, 3, 5, 8, 13]);
  assertEquals(
    fibs(20),
    [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]
  );
});

Deno.test(function fibsRecTest() {
  assertEquals(fibsRec(1), [0]);
  assertEquals(fibsRec(2), [0, 1]);
  assertEquals(fibsRec(8), [0, 1, 1, 2, 3, 5, 8, 13]);
  assertEquals(
    fibsRec(20),
    [
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]
  );
});
