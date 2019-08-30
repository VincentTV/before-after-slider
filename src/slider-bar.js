/*
 * @Desc: Before After Slider
 * @Author: vincentfong
 * @Date: 2019-08-30
 * @LastEditors: vincentfong
 * @LastEditTime: 2019-08-31
 */
import './style.scss';

class SliderBar {
  constructor(options = {}) {
    // 可选参数
    this.options = {
      width: "",
      height: "",
      beforeImg: null,
      afterImg: null,
      line: true,
      lineColor: ""
    };
    // 本地数据
    this.localData = {
      sliderContainer: null,
      sliderWrap: null,
      beforeWrap: null,
      sliderBtn: null,
      marginX: 0
    };

    this.isPhone = window.hasOwnProperty("ontouchstart"); // 是否手机
    this.moveHandler = this.moveHandler.bind(this); // 拖动函数绑定this，为了抬起解绑

    this.options = { ...this.options, ...options }; // 合并默认参数和客户参数
    this.el = document.querySelector(options.el); // 获取容器

    this.init(this.el);
  }

  // 添加事件
  addListener() {
    const sliderBtn = this.localData.sliderBtn;

    if (this.isPhone) {
      sliderBtn.ontouchstart = this.startSlide.bind(this);
      sliderBtn.ontouchend = this.endSlide.bind(this);
    } else {
      sliderBtn.onmousedown = this.startSlide.bind(this);
      sliderBtn.onmouseup = this.endSlide.bind(this);
    }
  }

  // 拖动
  startSlide(e) {
    e.preventDefault();

    const sliderWrap = this.localData.sliderWrap;
    const sliderBtn = this.localData.sliderBtn;

    let slideEvent = (e.touches && e.touches[0]) || e;
    this.localData.marginX = slideEvent.pageX - sliderBtn.offsetLeft;
    this.isPhone
      ? sliderWrap.addEventListener("touchmove", this.moveHandler)
      : sliderWrap.addEventListener("mousemove", this.moveHandler);
  }

  // 结束拖动
  endSlide() {
    const sliderWrap = this.localData.sliderWrap;
    this.isPhone
      ? sliderWrap.removeEventListener("touchmove", this.moveHandler)
      : sliderWrap.removeEventListener("mousemove", this.moveHandler);
  }

  // 拖动处理函数
  moveHandler(e) {
    let marginX = this.localData.marginX;
    let slideEvent = (e.touches && e.touches[0]) || e;
    this.localData.sliderBtn.style.left = slideEvent.pageX - marginX + "px";
    this.localData.beforeWrap.style.width = slideEvent.pageX - marginX + "px";
  }

  // 初始化
  init(el) {
    const {
      beforeImg,
      afterImg,
      width,
      height,
      line,
      lineColor
    } = this.options;
    if (!beforeImg || !afterImg) return;

    el.innerHTML = `
      <div class="slider-container">
        <div class="slider-wrap">
          <div class="before-img">
            <img src=${beforeImg} alt="">
          </div>
          <img src=${afterImg} alt="">
          <span class="slider-btn"></span>
        </div>
      </div>
    `;

    this.localData.sliderContainer = el.querySelector(".slider-container");
    this.localData.sliderWrap = el.querySelector(".slider-wrap"); // 整个滑动区域
    this.localData.beforeWrap = el.querySelector(".before-img"); // 左边图片外框
    this.localData.sliderBtn = el.querySelector(".slider-btn"); // 滑动条

    const {
      sliderContainer,
      sliderBtn
    } = this.localData;

    el.style.cssText = `display: flex;justify-content: center;`;
    sliderContainer.style.cssText = `width: ${width}; height: ${height};`;
    if (!line) sliderBtn.style.background = "none";
    else if (lineColor) sliderBtn.style.background = lineColor;

    this.addListener();
  }
}
export default SliderBar;
