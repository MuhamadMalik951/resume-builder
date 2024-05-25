// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}",
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx,mjs}",
];
export const theme = {
	extend: {
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
	},
};
export const darkMode = "class";
export const plugins = [nextui()];
