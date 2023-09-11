/** @type {import('tailwindcss').Config} */
const tailwindcssForms = require("@tailwindcss/forms");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "marine-blue": "hsl(213, 96%, 18%)",
          "purplish-blue": "hsl(243, 100%, 62%)",
          "pastel-blue": "hsl(228, 100%, 84%)",
          "light-blue": "hsl(206, 94%, 87%)",
          "strawberru-red": "hsl(354, 84%, 57%)",
        },
        neutral: {
          "cool-gray": "hsl(231, 11%, 63%)",
          "light-gray": "hsl(229, 24%, 87%)",
          magnolia: "hsl(217, 100%, 97%)",
          alabaster: "hsl(231, 100%, 99%)",
        },
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        "ubuntu-bold": "Ubuntu-Bold",
        "ubuntu-medium": "Ubuntu-Medium",
        "ubuntu-regular": "Ubuntu-Regular",
      },
      fontSize: {
        body: "16px",
      },
    },
  },
  plugins: [tailwindcssForms],
};
