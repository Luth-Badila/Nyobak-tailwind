/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["index.html"],
    theme: {
        extend: {
            colors: {
                biru: "#130ccc",
                tema: "rgb(var(--warna-tema) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};