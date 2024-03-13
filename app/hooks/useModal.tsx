import { create } from 'zustand';

interface ModalStore {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

export const useModal = create<ModalStore>((set) => ({
  modalOpen: false,
  setModalOpen: (value) => set({ modalOpen: value }),
}));
