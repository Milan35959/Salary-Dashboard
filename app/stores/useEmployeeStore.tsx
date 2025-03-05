// stores/useEmployeeStore.ts
import { create } from 'zustand';

interface Employee {
  name: string;
  role: string;
  progress: number;
  image: string;
}

interface EmployeeStore {
  employees: Employee[];
  setEmployees: (employees: Employee[]) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const useEmployeeStore = create<EmployeeStore>((set) => ({
  employees: [],
  setEmployees: (employees) => set({ employees }),
  currentPage: 1,
  setCurrentPage: (currentPage) => set({ currentPage }),
}));