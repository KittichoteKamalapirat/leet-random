import flatten from "flat";
import { create, GetState, SetState } from "zustand";
import { LeetcodeQuestion } from "../types/LeetcodeQuestion";

export type IStoreSet<Props = Record<string, any>> = (
  keyOrObj: Partial<Props> | keyof Props,
  value?: any
) => void;

type PropsWithSet<Props = Record<string, any>> = Props & {
  set: IStoreSet<Props>;
};

export type ProblemSet = "blind75" | "neet150";
export type IStore = {
  setting: PropsWithSet<{
    test1: Record<string, string>;
    problemSet: ProblemSet;
  }>;
  questions: PropsWithSet<{
    randomQuestions: LeetcodeQuestion[];
    allQuestions: LeetcodeQuestion[];
  }>;
};

export type InitialState = {
  setting: Omit<IStore["setting"], "set">;
};

export const initialState: InitialState = {
  setting: {
    test1: { x: "1" },
    problemSet: "blind75",
  },
};

interface SetOptions {
  unflatten?: boolean;
}

export const useStore = create<IStore>(
  (set: SetState<IStore>, get: GetState<IStore>) => {
    function factorySetFunc<ContextObject = IStore>(
      prefixPath: keyof IStore,
      { unflatten = true }: SetOptions = {}
    ) {
      const _set: IStoreSet<Partial<Omit<ContextObject, "set">>> = (
        keyOrObj,
        value
      ) => {
        const state = get();
        const stateInContext = state[prefixPath];

        let flattenedObject: Record<string, any>;
        const isFirstParamObject =
          (keyOrObj as Record<string, any>)?.constructor?.name === "Object";
        if (isFirstParamObject) {
          flattenedObject = {
            [prefixPath]: {
              ...stateInContext,
              ...(keyOrObj as Record<string, any>),
            },
          };
        } else {
          if (value === undefined) {
            throw new Error(
              `set/${prefixPath}/${
                keyOrObj as string
              }: property name was provided but value is missing. Provide the value to be set.`
            );
          }
          const keyPath = `${keyOrObj as string}`.replace(/\.+/, ".");
          flattenedObject = {
            [prefixPath]: { ...stateInContext, [keyPath]: value },
          };
        }

        // some attributes contain a dot separator in their keys by purpose
        set(
          (unflatten
            ? flatten.unflatten(flattenedObject)
            : flattenedObject) as IStore
        );
      };

      return _set;
    }

    const store: IStore = {
      setting: {
        set: factorySetFunc<IStore["setting"]>("setting", {
          unflatten: false,
        }),
        test1: { x: "" },
        problemSet: "blind75",
      },
      questions: {
        set: factorySetFunc<IStore["questions"]>("questions", {
          unflatten: false,
        }),
        randomQuestions: [],
        allQuestions: [],
      },
    };

    return store;
  }
);

// useStore.getState() basically get new reference of cloned state
export const initialStoreState = useStore.getState();

export default useStore;
