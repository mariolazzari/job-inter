export type FetchMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type Query = Extract<FetchMethod, "GET">;
export type Mutation = Exclude<FetchMethod, "GET">;
