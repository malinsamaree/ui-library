import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

const extensions = [
    '.js', '.jsx', '.ts', '.tsx',
];

export default {
    input: './src/index.ts',
    output: [
        {
            dir: './dist/cjs/',
            format: 'cjs',
            preserveModules: true,
            sourcemap: true
        },
        {
            dir: './dist/esm/',
            format: 'esm',
            preserveModules: true,
            sourcemap: true
        },
    ],
    plugins: [
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: "auto"
        }),
        resolve({
            extensions,
        }),
        babel({
            extensions,
            babelHelpers: 'bundled',
            exclude: ['node_modules/**']
        })
    ]
}