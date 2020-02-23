import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    name: "index",
    globals: {
      react: "React"
    },
    format: "cjs",
    exports: "named"
  },
  plugins: [
    commonjs({ include: /node_modules/ }),
    babel({
      extensions: [".ts", ".tsx"],
      exclude: /node_modules/,
      babelrc: false,
      runtimeHelpers: false,
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript"
      ]
    }),
    resolve({
      extensions: [".js", ".ts", ".tsx"]
    }),
    terser()
  ],
  external: ["react"]
};
