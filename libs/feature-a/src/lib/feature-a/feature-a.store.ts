import { signalStore, withState, withMethods, patchState } from '@ngrx/signals';

export interface FeatureAState {
  counter: number;
  items: string[];
  loading: boolean;
}

const initialState: FeatureAState = {
  counter: 0,
  items: ['Item 1', 'Item 2', 'Item 3'],
  loading: false,
};

export const FeatureAStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    increment() {
      patchState(store, { counter: store.counter() + 1 });
    },
    decrement() {
      patchState(store, { counter: store.counter() - 1 });
    },
    addItem(item: string) {
      patchState(store, { items: [...store.items(), item] });
    },
    removeItem(index: number) {
      const newItems = [...store.items()];
      newItems.splice(index, 1);
      patchState(store, { items: newItems });
    },
    setLoading(loading: boolean) {
      patchState(store, { loading });
    },
  }))
);
