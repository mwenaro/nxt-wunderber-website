function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--color-text-base"),
        secondary: withOpacity("--color-text-muted"),
        accent: withOpacity("--color-text-inverted"),
        inverted: withOpacity("--color-text-inverted"),
      },

      // body {
      //   background-color: #7F9A52;
      // }

      // /* Jungle Hues for headings and buttons */
      // h1, h2, h3, button {
      //   color: #008080;
      // }

      // /* Safari Sunset for accents */
      // .icon, .border {
      //   color: #FF4500;
      // }

      // /* Earthy Tones for icons */
      // .icon {
      //   color: #CC5500;
      // }

      // /* Jungle Hues for links */
      // a {
      //   color: #87CEEB;
      // }

      // /* Safari Sunset for hover effects */
      // a:hover, button:hover {
      //   background-color: #FFB6C1;
      // }

      // /* Earthy Tones for form input fields */
      // input[type="text"] {
      //   background-color: #9B7E4E;
      // }

      // /* Jungle Hues for form labels */
      // label {
      //   color: #FFA07A;
      // }
    },
  },
  plugins: [],
};
