import React from "react";
import Canvas from "./Canvas"; // Change the path according to the directory structure of your project
import { shape } from "./shape";

import {
  PI,
  r_exp,
  complexAdd,
  complexMul,
  randomx,
  get_K,
  get_xn_from_pathArr,
  get_Cn
} from "./get_DFS.js";


const draw = (ctx, height, width, lineWidth, enlarge, cx, cy) => {
  var c = document.getElementById("c");
  var pathArr = [];
  pathArr[0] = shape[0];
  var time_n = 0;
  var K = []; //不同xn使用的K一样

  var imgxn = [];
  var imgCn = [];
  var circleCounts = [];

  var pointCount = [];
  var count = [];
  var valuePointer = []; //指向当前绘制的路径点
  var values_x = []; //存储路径的x坐标
  var values_y = []; //存储路径的y坐标

  function initImgs(img_sum) {
    for (var i = 0; i < img_sum; i++) {
      pointCount[i] = 0;
      count[i] = 0;
      valuePointer[i] = 0;
      values_x[i] = [];
      values_y[i] = [];
    }
  }

  function initImg(imgIndex, cirs = 400, pointC = 11, enlarge = 1) {
    pointCount[imgIndex] = 2 ** pointC - 1;
    circleCounts[imgIndex] = cirs;
    K = get_K(circleCounts[imgIndex]);
    imgxn[imgIndex] = get_xn_from_pathArr(pathArr[imgIndex]);
    imgCn[imgIndex] = get_Cn(imgxn[imgIndex], circleCounts[imgIndex], enlarge); //第三个参数为放大倍数
  }
  // console.log(circleCounts)

  function DrawCircles(cx, cy, n = 5, imgIndex = 0, speed = 1) {
    let p = [cx, cy]; //第一个圆的圆心
    for (var k = 0; k < n; k++) {
      ctx.beginPath();
      var r = Math.hypot(imgCn[imgIndex][k][0], imgCn[imgIndex][k][1]);
      ctx.arc(p[0], p[1], r, 0, 2 * PI);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "#3B6E75";
      if (k !== 0) {
        ctx.stroke();
      }
      // context.stroke();
      var W = r_exp(
        1,
        (2 * PI * (time_n * speed) * K[k]) / imgxn[imgIndex].length
      ); // W-因子
      p = complexAdd(
        p,
        complexMul([imgCn[imgIndex][k][0], imgCn[imgIndex][k][1]], W)
      );
    }
  }

  function DrawPath(cx, cy, n = 5, imgIndex = 0, speed = 1) {
    let p = [cx, cy];
    for (var k = 0; k < n; k++) {
      var W = r_exp(
        1,
        (2 * PI * (time_n * speed) * K[k]) / imgxn[imgIndex].length
      ); // W-因子
      p = complexAdd(
        p,
        complexMul([imgCn[imgIndex][k][0], imgCn[imgIndex][k][1]], W)
      );
    }
    var x = p[0];
    var y = p[1];
    valuePointer[imgIndex] = valuePointer[imgIndex] + 1;
    values_x[imgIndex][valuePointer[imgIndex] & pointCount[imgIndex]] = x;
    values_y[imgIndex][valuePointer[imgIndex] & pointCount[imgIndex]] = y;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = "#FEE101";
    // context.strokeStyle = "rgba(" + randomx(205) + "," + randomx(125)+","+randomx(125)+",1.0)";

    ctx.moveTo(x, y);
    for (var i = 1; i <= pointCount[imgIndex]; ++i) {
      ctx.lineTo(
        values_x[imgIndex][(valuePointer[imgIndex] - i) & pointCount[imgIndex]],
        values_y[imgIndex][(valuePointer[imgIndex] - i) & pointCount[imgIndex]]
      );
    }
    ctx.stroke();
  }

  function DrawLines(cx, cy, n = 5, imgIndex = 0, speed = 1) {
    ctx.beginPath();
    let p = [cx, cy]; //第一个圆的圆心，用于定位整个图形
    for (var k = 0; k < n; k++) {
      ctx.moveTo(p[0], p[1]); //第一个线不画
      var W = r_exp(
        1,
        (2 * PI * (time_n * speed) * K[k]) / imgxn[imgIndex].length
      ); // W-因子
      p = complexAdd(p, complexMul(imgCn[imgIndex][k], W));
      if (k === 0) continue;
      ctx.lineTo(p[0], p[1]);
    }
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,255,255,0.5)";
    // context.strokeStyle = "rgba(" + randomx(255) + "," + randomx(255) + "," + randomx(255) + ",0.5)";

    ctx.stroke();
  }

  function getImgCenterSize(imgIndex = 0) {
    var a = 0;
    var b = 0;
    var maxx = 0,
      minx = 0,
      imgw = 0;
    var maxy = 0,
      miny = 0,
      imgh = 0;
    for (var i = 0; i < imgxn[imgIndex].length - 1; i++) {
      a += imgxn[imgIndex][i][0];
      b += imgxn[imgIndex][i][1];
      maxx = Math.max(maxx, imgxn[imgIndex][i][0]);
      minx = Math.min(minx, imgxn[imgIndex][i][0]);
      maxy = Math.max(maxy, imgxn[imgIndex][i][1]);
      miny = Math.min(miny, imgxn[imgIndex][i][1]);
    }

    a = a / imgxn[imgIndex].length;
    b = b / imgxn[imgIndex].length;
    imgw = maxx - minx;
    imgh = maxy - miny;
    return [a, b, imgw, imgh];
  }

  function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
      now = new Date();
      if (now.getTime() > exitTime) {
        return;
      }
    }
  }

  //设置第一个圆的圆心位置，用于定位整个图形位置
  //参数：align_left: 设置圆心x坐标距离左边界的距离为:align_left+imgWidth
  //参数：align_top: 圆心y坐标距离顶部边界距离为：align_top
  function setImgCenter(align_left = 50, align_top = 0, imgIndex = 0) {
    var imgInfo = getImgCenterSize(imgIndex);
    var imgWidth = imgInfo[2];
    var imgHeight = imgInfo[3];
    var center_y = align_top + 0;
    var center_x = imgWidth + align_left;
    return [center_x, center_y];
  }

  function DrawImg(cx, cy, imgIndex = 0, speed = 1) {
    var center_x = setImgCenter(cx, cy, imgIndex)[0];
    var center_y = setImgCenter(cx, cy, imgIndex)[1];
    DrawCircles(center_x, center_y, circleCounts[imgIndex], imgIndex, speed);
    DrawLines(center_x, center_y, circleCounts[imgIndex], imgIndex, speed);
    DrawPath(center_x, center_y, circleCounts[imgIndex], imgIndex, speed);
    // DrawText(center_x, center_y,"图像宽：" + getImgCenterSize(imgIndex)[2] + " 高：" + getImgCenterSize(imgIndex)[3], -200, -40);
    // DrawText(center_x, center_y, "图像中心: (" + center_x + ", " + center_y + ")", -200, -20);
    // DrawText(center_x, center_y, "使用圆个数: " + circleCounts[imgIndex], -200, 0);
  }

  //pathArr[0] = shape;

  var resizeCanvas = function () {
    /*
    var ratio = height / width;
    var cW = 0.5 * window.innerWidth;
    var cH = cW * ratio;
    if (width < cW * devicePixelRatio) {
    c.width = cW * devicePixelRatio;
    c.height = cH * devicePixelRatio;
    }else {
      c.width = width;
      c.height = height;
    }
    */
    //width = cW * devicePixelRatio;
    //height = cH * devicePixelRatio;
    c.width = width;
    c.height = height;
    ctx.scale(devicePixelRatio, devicePixelRatio);
  };
  /************************************************************
   * 调用initImg(imgIndex, cirs = 400, pointC = 11, enlarge = 1)，初始化自己的img，参数依次为：
   * imgIndex： 第几个pathArr
   * cirs： 圆的个数（默认400）
   * pointC： 路径存储容量（默认11，内部计算后为2**11）
   * enlarge： 放大倍数(默认1，不放大)
   * ********************************************************/

  initImgs(pathArr.length); // number of patharr
  //initImg(0, 500, 11, 1);
  
    initImg(0, 500, 11, enlarge);
  
  /************************************************************
   * 绘图， 调用DrawImg(cx, cy, imgIndex=0, speed=1)
   * cx：x坐标
   * cy：y坐标
   * imgIndex：哪一张图
   * speed：速度，默认为1，即不加速，可以是0.1, 0.2, ......, 1,2,3......
   * ********************************************************/
  //循环刷新函数
  (function frame() {
    resizeCanvas();
    ctx.clearRect(0, 0, width, height);
    //ctx.fillStyle = "#000000"; //背景色
    ctx.fillStyle = "rgba(255, 255, 255, 0)";
    ctx.fillRect(0, 0, width, height);

    /* ************修改下面的函数的参数****************/

    DrawImg(cx, cy, 0, 10);

    // DrawImg(-500, 150, 22, 4);   //2022
    // DrawImg(-300, 400, 23, 4);   //元旦
    // DrawImg(-350, 650, 24, 8);   //快乐

    /* ************修改上面的函数的参数****************/

    time_n = time_n + 1;

    // DrawImg(0,0, pathArr, 50);

    window.requestAnimationFrame(frame);
  })();
};

function FourierDraw() {
  var cx;
  var cy;
  var w;
  var h;
  var lineWidth;
  var enlarge;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    w = 400;
    h = 250;
    lineWidth = 0.5;
    enlarge = 0.2;
    cx = -555;
    cy = 30;
  } else {
    w = 800;
    h = 500;
    lineWidth = 2;
    enlarge = 1;
    cx = -520;
    cy = 150;
  }

  return (
    <div className="draw-name">
      <Canvas
        id="c"
        draw={draw}
        height={h}
        width={w}
        lineWidth={lineWidth}
        enlarge={enlarge}
        cx={cx}
        cy={cy}
      />
    </div>
  );
}

export default FourierDraw;
