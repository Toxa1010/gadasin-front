import { writable } from "svelte/store";

export const isModalOpen = writable(true);
export const modalContent = writable("");
export const orders = writable([]);
export const fullPrice = writable(0);
export const userId = writable(1);
