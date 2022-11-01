import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

const extensions = [
    '.js', '.jsx', '.ts', '.tsx', '.css', '.scss',
];

export default {
    input: './src/index.ts',
    output: [
        {
            dir: './dist/cjs/',
            format: 'cjs',
            preserveModules: true
        },
        {
            dir: './dist/esm/',
            format: 'esm',
            preserveModules: true
        },
    ],
    plugins: [
        postcss (),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: "auto"
        }),
        resolve({extensions}),
        babel({
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            babelHelpers: 'bundled',
            exclude: ['node_modules/**']
        })
    ]
}
