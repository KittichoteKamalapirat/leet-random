import { ObjectKeys, ObjectValues } from "../types";

export const LocalStorage = {
  CompletedQuestions: "completedQuestions",
} as const;

export type LocalStorageKeys = ObjectKeys<typeof LocalStorage>;
export type LocalStorageValues = ObjectValues<typeof LocalStorage>;
