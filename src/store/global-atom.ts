import { atom } from "recoil";

export type GlobalAtomStateType = {
  navigationSheet: {
    open: boolean;
  };
};

const defaultGlobalAtomState: GlobalAtomStateType = {
  navigationSheet: {
    open: false,
  },
};

export const globalAtom = atom<GlobalAtomStateType>({
  key: "globalAtom",
  default: defaultGlobalAtomState,
});
