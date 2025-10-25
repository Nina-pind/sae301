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
        sinscrire: resolve(__dirname, "pages/sinscrire.html"),
        panier: resolve(__dirname, "pages/panier.html"),
        mentions_légales: resolve(__dirname, "pages/mentions_légales.html"),
        conditions: resolve(__dirname, "pages/conditions.html"),

      },
    },
  },
});
