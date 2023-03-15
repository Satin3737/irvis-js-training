import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        fonts: `${buildFolder}/assets/fonts/`,
        images: `${buildFolder}/assets/img/`,
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/assets/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`
    },
    src: {
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,ico,json,xml}`,
        svg: `${srcFolder}/assets/img/**/*.svg`,
        js: `${srcFolder}/js/`,
        scss: `${srcFolder}/assets/scss/*.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    watch: {
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico,json,xml}`,
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/assets/scss/**/*.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}