import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/sae301/", // ← remplace par le nom exact de ton repo GitHub
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        parfum: resolve(__dirname, "pages/parfum.html"),
        produit: resolve(__dirname, "pages/produit.html"),

      },
    },
  },
});
