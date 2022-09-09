export var PI = 3.14159;

//复数乘法
//z1 = a1 + jb1，用[a1, b1]表示z1
//z2 = a2 + jb2，用[a2, b2]表示z2
export function complexMul(z1, z2) {
  return [z1[0] * z2[0] - z1[1] * z2[1], z1[0] * z2[1] + z2[0] * z1[1]];
}

// 复数加法
export function complexAdd(z1, z2) {
  return [z1[0] + z2[0], z1[1] + z2[1]];
}

// 复指数转复数，z=r*(e^jθ)=r*cos(θ)+r*jsin(θ) 其中θ为复数
export function r_exp(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

export function get_Cn(xn, circleCounts, L = 2) {
  var xn_len = xn.length;
  var Cn = []; //N为圆的数量
  var K = get_K(circleCounts);
  for (var k = 0; k < circleCounts; k++) {
    Cn[k] = [0, 0];
    for (var n = 0; n < xn_len; n++) {
      Cn[k] = complexAdd(
        Cn[k],
        complexMul(xn[n], r_exp(1, (-2 * PI * K[k] * n) / xn_len))
      );
    }
    Cn[k][0] /= xn_len / L;
    Cn[k][1] /= xn_len / L;
  }
  return Cn;
}

export function get_K(circleCounts) {
  var K = []; //length = circleCount
  for (var i = 0; i < circleCounts; i++) {
    K[i] = ((1 + i) >> 1) * (i & 1 ? -1 : 1); //K = [0, -1,1, -2,2, -3,3, -4,4,...]
  }
  return K;
}

// path: [x0, y0, x1, y1, x2, y2, ..., xn, yn]
export function get_xn_from_pathArr(path) {
  var xn = [];
  for (var i = 0; i < path.length / 2; i++) {
    xn[i] = [path[2 * i] - path[0], path[2 * i + 1] - path[1]]; //注意path是二维数组
  }
  return xn;
}

//生成[1, n]之间随机数
export function randomx(n) {
  return Math.ceil(Math.random() * n);
}
