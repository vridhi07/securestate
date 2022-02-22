module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        15: "3.56rem",
        16.6: "4.6rem",
        95.5: "95%",
        69.5: "69%",
        500: "500px",
      },
      colors: {
        "orange-cus-1": "#F67A32",
        "orange-cus-2": "#FEF8F5",
        "gray-cus": "#606060",
        "gray-cus-2": "#F9F9F9",
        "gray-text-3": "#646464",
        "gray-text-4": "#4B525C",
        "gray-hover": "rgba(0, 0, 0, 0.04)",
        "gray-cus-5": "#606060",
        "gray-cus-6": "#9C8E96",
        "gay-cus-7": "#C8C7CC",
        "blue-cus-1": "#E3F2FD",
        "yes-btn": "#F8B3B0",
        "no-btn": "#AEDD94",
        "primary-clr": "#F3F2FA",
        "primary-btn": "#606060",
        "success-btn": "#89CF4B",
        "error-btn": "#F06E70",
      },
      screens: {
        xs: "370px",
      },
      maxWidth: {
        5.5: "66rem",
      },
      padding: {
        0.56: "3px",
        2.56: "0.66rem",
      },
      fontSize: {
        "xs-cus": "0.938rem",
        "lg-cus": "1.063rem",
      },
      backgroundImage: {
        // dragAndDrop: "url('./constantData/images/H0xdb.png')",
        lockAndChain: "url('./constantData/images/locksandChain.jpeg')",
      },
      backgroundSize: {
        50: "400px",
      },
    },
  },
  plugins: [],
};
