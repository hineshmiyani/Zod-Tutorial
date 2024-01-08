import { z } from "zod";
import { fromZodError } from "zod-validation-error";

/* ✅ : Basic usage */

// const UserSchema = z.object({
//   username: z.string(),
// });

// type User = z.infer<typeof UserSchema>;

// const user1 = { username: "Hinesh" };
// const user2 = { username: 4 };

// console.log(UserSchema.parse(user1)); // => { username: "Hinesh" }
// console.log(UserSchema.parse(user2)); // => throw error

// console.log(UserSchema.safeParse(user1)); // => validate input and give data object
// console.log(UserSchema.safeParse(user2)); // => validate input and give error object

/* ✅ : Basic types */
// const UserSchema = z.object({
//   // primitive values
//   username: z.string(),
//   age: z.number(),
//   birthDate: z.date(),
//   isProgrammar: z.boolean(),
//   id: z.bigint(),

//   // empty types
//   test: z.undefined(),
//   test1: z.null(),
//   test2: z.void(),

//   // catch-all types
//   // allows any value
//   test3: z.any(),
//   test4: z.unknown(),

//   // never type
//   // allows no values
//   test5: z.never(),
// });

// type User = z.infer<typeof UserSchema>;

// const user: User = { username: "Hinesh" };

// console.log(UserSchema.safeParse(user).success);

/* ✅ : Basic validation */
// const hobbies = ["Programming", "Wrestling", "Guitar"] as const;

// const UserSchema = z.object({
//   username: z.string().min(3).max(15),
//   age: z.number().gte(18).lte(52),
//   favouriteNumber: z.number().default(Math.random),
//   birthDate: z.date(),
//   isProgrammar: z.boolean().nullable(), // nullable only allows null
//   isComedian: z.boolean().nullish(), // nullish  allows null and undefined both
//   isStudent: z.boolean().default(true),
//   hasLaptop: z.literal(true),
//   hobby: z.enum(hobbies),
// });

// type User = z.infer<typeof UserSchema>;

// const user = {
//   username: "Joe",
//   age: 50,
//   birthDate: new Date("12-12-1965"),
//   isProgrammar: null,
//   isComedian: undefined,
//   hasLaptop: true, // always accpes true literal
//   hobby: "Programming",
// };

// console.log("[Validate:]", UserSchema.safeParse(user));

/* ✅ : Object type */

// const hobbies = ["Programming", "Wrestling", "Guitar"] as const;

// const UserSchema = z.object({
//   username: z.string().min(3).max(15),
//   age: z.number().gte(18).lte(52),
//   favouriteNumber: z.number().default(Math.random),
//   birthDate: z.date(),
//   isProgrammar: z.boolean().nullable(), // nullable only allows null
//   isComedian: z.boolean().nullish(), // nullish  allows null and undefined both
//   isStudent: z.boolean().default(true),
//   hasLaptop: z.literal(true),
//   hobby: z.enum(hobbies),
// })
// .strict()
// .partial()
// .extend({
//   name: z.string(),
// })
// .passthrough();
// .pick({
//   username: true,
//   name: true,
//   hobby: true,
// })
// .omit({
//   hobby: true,
// });

// type User = z.infer<typeof UserSchema>;

// const user = {
//   username: "Joe",
//   name: "Joe",
//   age: 50,
//   birthDate: new Date("12-12-1965"),
//   isProgrammar: null,
//   isComedian: undefined,
//   hasLaptop: true, // always accpes true literal
//   hobby: "Programming",
//   occuption: "SDE",
// };

// console.log("[Validate:]", UserSchema.safeParse(user));

/* ✅ : Array type */

// const UserSchema = z.object({
//   username: z.string(),
//   friends: z.array(z.string()).min(2).max(5),
//   // friends: z.array(z.string()).nonempty(),
// });

// const FriendsSchema = UserSchema.shape.friends.element;

// type User = z.infer<typeof UserSchema>;
// type Friend = z.infer<typeof FriendsSchema>;

// const user = {
//   username: "Julien",
//   friends: ["Joe", "John", "James", "Jack", "Jacob"],
// };

// console.log("[Validate:]", UserSchema.safeParse(user));

/* ✅ : Tuple type */

// const UserSchema = z.object({
//   username: z.string(),
//   // cords: z.tuple([z.number(), z.string(), z.number()]),
//   cords: z.tuple([z.number(), z.string(), z.number()]).rest(z.number()),
// });

// type User = z.infer<typeof UserSchema>;

// const user = {
//   username: "Julien",
//   cords: [4, "56", 6, 8],
// };

// console.log("[Validate:]", UserSchema.safeParse(user));

/* ✅ : Union type */

// const UserSchema = z.object({
//   id: z.union([z.string(), z.number()]),
//   // id: z.string().or(z.number()),
// });

// type User = z.infer<typeof UserSchema>;

// const user = {
//   id: "61f5e31c-b2f4-4e0d-b58d-799aac2e5af2",
// };
// console.log("[Validate:]", UserSchema.safeParse(user));

/* ✅ : Discriminated Union type */

// const UserSchema = z.object({
//   id: z.discriminatedUnion("status", [
//     z.object({
//       status: z.literal("success"),
//       data: z.string(),
//     }),
//     z.object({
//       status: z.literal("failed"),
//       error: z.instanceof(Error),
//     }),
//   ]),
// });

// type User = z.infer<typeof UserSchema>;

// const user = {
//   id: { status: "success", data: "61f5e31c-b2f4-4e0d-b58d-799aac2e5af2" },
// };
// console.log("[Validate:]", UserSchema.safeParse(user));

/* ✅ : Record type */

// const UserMap = z.record(z.string(), z.number());

// type User = z.infer<typeof UserMap>;

// const user = {
//   age: 56,
//   enNum: 35,
// };

// console.log("[Validate:]", UserMap.safeParse(user));

/* ✅ : Map type */

// const UserMap = z.map(z.string(), z.object({ name: z.string() }));

// type User = z.infer<typeof UserMap>;

// const user = new Map([
//   ["id-john", { name: "John" }],
//   ["id-James", { name: "James" }],
// ]);

// console.log(UserMap.safeParse(user));

/* ✅ : Set type */

// const NumberSet = z.set(z.number());

// type Number = z.infer<typeof NumberSet>;

// const user: Number = new Set([1, 23, 45, 5, 4, 5, 45]);

// console.log(NumberSet.safeParse(user));

/* ✅ : Promise type */

// const PromiseSchema = z.promise(z.string());

// type Promise = z.infer<typeof PromiseSchema>;

// const promise = Promise.resolve("2");

// console.log(PromiseSchema.safeParse(promise));

/* ✅ : Advanced Validation */

// const BrandEmailSchema = z
//   .string()
//   .email()
//   .refine((val) => val.endsWith("@tribul.org"), {
//     message: "Email must end with @tribul.org",
//   });

// const email = "jack@tribul.org";

// console.log(BrandEmailSchema.safeParse(email));

/* ✅ : Error Handling */

const UserSchema = z.object({
  username: z.string(),
  age: z.number().min(18),
  // cords: z.tuple([z.number(), z.string(), z.number()]),
  cords: z.tuple([z.number(), z.string(), z.number()]).rest(z.number()),
});

type User = z.infer<typeof UserSchema>;

const user = {
  username: "Julien",
  age: 16,
  cords: [4, "56", 6, 8],
};

const result = UserSchema.safeParse(user);
// console.log("[Validate:]", result);

if (!result.success) {
  console.log(fromZodError(result.error).message);
}
