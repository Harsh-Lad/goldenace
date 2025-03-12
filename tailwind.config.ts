import type { Config } from "tailwindcss";

export default {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar-hide")],
} satisfies Config;
