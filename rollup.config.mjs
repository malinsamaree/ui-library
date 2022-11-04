import {babel} from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import alias from "@rollup/plugin-alias";
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
        alias({
            entries: [
                {find: 'react', replacement: path.resolve(__dirname, 'node_modules', 'react')},
                {find: 'react-dom', replacement: path.resolve(__dirname, 'node_modules', 'react-dom')}
            ]
        }),
        commonjs({
            include: /node_modules/,
            requireReturnsDefault: "auto"
        }),
        resolve({extensions}),
        babel({
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            babelHelpers: 'bundled',
            exclude: ['node_modules/**']
        })
    ]
}
