# BeforeAfterSlider [Demo](https://vincenttv.github.io/before-after-slider/example)

###### [README in English](README.md)

- 原生ES6开发、不依赖任何框架和库的轻量级图片Before/After效果
- 可自定义图片、区域大小、滑动条及颜色等
- 滑动区域自适应居中，图片以高度自适应居中，不必额外样式处理，方便布局。
- API简洁，易上手。支持 PC 及移动端。


## 属性

| 属性           | 类型     | 默认值               | 描述                             |
| :------------ | :------- | :------------------ | :------------------------------ |
| el            | String   |（必选参数）           | 容器，"#sliderId"                |
| beforeImg     | String   |（必选参数）           | 图片1的 URL                      |
| afterImg      | String   |（必选参数）           | 图片2的 URL                      |
| width         | String   | '100%'              | 滑动区宽度,支持各种值(%,px,em,rem) |
| height        | String   | none                | 滑动区高度                        |
| line          | Boolean  | true                | 是否需要添加分割线                 |
| lineColor     | String   | 'rgba(0, 0, 0, .5)' | 分割线颜色，支持透明色              |

## Getting Started

* 模块支持:
    * 在浏览器环境下使用，通过<script>标签来引入这个类库
    * 通过NPM安装使用
    * 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范

### Install

```shell
npm install before-after-slider --save
```

### Usage Example

- **Native JavaScript**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="author" content="vincentfong" />
    <title>Before/After slider @vincentfong</title>
  </head>
  <body>
    <div id="mySlider"></div>
    
    <script src="./slide-ruler.js"></script>
    <script>
      new SliderBar({
        el: "#slider1",
        beforeImg: "./after.jpg",
        afterImg: "./before.jpg",
        width: "90%",
        height: "400px",
        line: false
      });
    </script>
  </body>
</html>
```

## How to Contribute

Anyone and everyone is welcome to contribute to this project. The best way to start is by checking our [open issues](https://github.com/VincentTV/before-after-slider/issues),[submit a new issues](https://github.com/VincentTV/before-after-slider/issues/new?labels=bug) or [feature request](https://github.com/VincentTV/before-after-slider/issues/new?labels=enhancement), participate in discussions, upvote or downvote the issues you like or dislike.

## License

[**The MIT License**](http://opensource.org/licenses/MIT).