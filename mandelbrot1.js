let x = 0;
let y = 0;
let max_iterations = 50;
let canvas = 400;
let infinity = 20;


function setup() {
  createCanvas(canvas, canvas);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  background(255);
  for (x = 0; x < height; x+=1) {
    for (y = 0; y < width; y+=1) {
      var index = (x + y * width)*4;
      var z_real = map(x, 0, width, -2, 2);
      var z_imag = map(y, 0, height, -2, 2);
      var c_real = z_real;
      var c_imag = z_imag;
      // c_real =  -0.835;
      // c_imag = -0.2321;
      var fz_real = 0;
      var fz_imag = 0;
      var n = 0;

      for (n = 0; n < max_iterations; n++) {
        fz_real = z_real * z_real - z_imag * z_imag + c_real;
        fz_imag = 2 * z_real * z_imag + c_imag;
        z_real = fz_real;
        z_imag = fz_imag;
        if (fz_real > infinity || fz_imag > infinity) 
          break;
      }
      var c;
      if(n == max_iterations) {
        c = 255;
        pixels[index + 0] = 0;
        pixels[index + 1] = 0;
        pixels[index + 2] = 0;
        pixels[index + 3] = 255;
      }
      else {
        c = map(n, 0, max_iterations, 50, 255);
        pixels[index + 0] = 0;
        pixels[index + 1] = c;
        pixels[index + 2] = c;
        pixels[index + 3] = 255;
      }
    }
  }
  updatePixels();
}
