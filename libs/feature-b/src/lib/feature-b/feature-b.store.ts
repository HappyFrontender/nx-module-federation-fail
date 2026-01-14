import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface FeatureBState {
  userName: string;
  messages: string[];
  isActive: boolean;
}

const initialState: FeatureBState = {
  userName: 'Guest',
  messages: ['Welcome to Feature B!', 'This is powered by NGRX Signals'],
  isActive: true,
};

export const FeatureBStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    setUserName(name: string) {
      patchState(store, { userName: name });
    },
    addMessage(message: string) {
      patchState(store, { messages: [...store.messages(), message] });
    },
    clearMessages() {
      patchState(store, { messages: [] });
    },
    toggleActive() {
      patchState(store, { isActive: !store.isActive() });
    },
  }))
);
