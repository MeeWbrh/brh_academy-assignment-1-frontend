import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Counts = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const GlobalCount = create<Counts>()((set) => ({
  count: 0,
  increment: () => set((state: any) => ({ count: state.count + 2 })),
  decrement: () => set((state: any) => ({ count: state.count - 2 })),
}));

export default GlobalCount;
