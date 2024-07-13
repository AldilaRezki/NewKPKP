const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
    theme: {
        extend: {
            colors: {
                biru: "#749BC2",
                tosca: "#4775A2",
                hijau: "#4BB274",
                merah: "#F05252",
                tombol: "#4775A2",
                text: "#5182B2",
            },
        },
    },
    plugins: [flowbite.plugin()],
};
