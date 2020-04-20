import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    name: "index",
    globals: {
      react: "React",
    },
    format: "cjs",
    exports: "named",
  },
  plugins: [
    commonjs({ include: /node_modules/ }),
    babel({
      extensions: [".ts", ".tsx"],
      exclude: /node_modules/,
      babelrc: true,
      runtimeHelpers: false,
    }),
    resolve({
      extensions: [".js", ".ts", ".tsx"],
    }),
    copy({
      targets: [{ src: "index.d.ts", dest: "dist" }],
    }),
    terser(),
  ],
  external: ["react"],
};
