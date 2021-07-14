<!--
 * @Author: your name
 * @Date: 2021-07-13 16:45:34
 * @LastEditTime: 2021-07-14 19:43:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3.0-test/README.md
-->

# add readme

# test

# demo

dev:
npm run dev

# make buld 打包并且将产物 copy 到指定目录

build1:
npm run build && make copyHtml && make copyJs && make copyCss

copyHtml: rmHtml
cp -i dist/index.html ../../view/home/testing/index.html

rmHtml:
rm -rf ../../view/home/testing/index.html

copyJs: rmJs
cp -rf dist/exam_vue/home/js ../../public/exam_vue/home/

rmJs:
rm -rf ../../public/exam_vue/home/js

copyCss: rmCss
cp -rf dist/exam_vue/home/css ../../public/exam_vue/home/

rmCss:
rm -rf ../../public/exam_vue/home/css



# prettier

<!-- https://prettier.io/docs/en/options.html#trailing-commas -->
