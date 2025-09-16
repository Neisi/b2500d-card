import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "b2500d-card.js",  
  output: {
    file: "dist/b2500d-card.js",
    format: "es"
  },
  plugins: [
    resolve(),
    commonjs()
  ]
};
