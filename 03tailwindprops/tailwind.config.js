/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],   // ye array hamare content ko search kar raha hai , index html aur src folder ke andar jo bhi js, ts, jsx, tsx files hain un sab ko search karega aur unme se tailwind classes ko use karega
  theme: {
    extend: {},
  },
  plugins: [],
}

