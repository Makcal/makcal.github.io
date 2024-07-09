// noinspection JSUnusedGlobalSymbols

import {nodeResolve} from '@rollup/plugin-node-resolve';
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default {
    input: [
        'src/scripts/main.ts',
        'src/scripts/comic.ts',
    ],
    output: {
        dir: 'dist/scripts',
    },
    plugins: [
        nodeResolve({browser: true}),
        terser(),
        typescript(),
        copy({
            targets: [
                {src: 'src', dest: 'dist', expandDirectories: true},
            ],
            filter: src => !src.match(/.*\.(js|jsx|ts|tsx)/),
            flatten: false,
        })
    ]
};