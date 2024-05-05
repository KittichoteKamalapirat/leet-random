import { ObjectKeys, ObjectValues } from "../types";

export const SessionStorage = {
  ProblemSet: "problemSet",
  RandomQuestions: "randomQuestions",
} as const;

export type SessionStorageKeys = ObjectKeys<typeof SessionStorage>;
export type SessionStorageValues = ObjectValues<typeof SessionStorage>;
