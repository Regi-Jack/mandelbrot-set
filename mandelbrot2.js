let x = 0;
let y = 0;
let max_iterations = 50;
let canvas = 400;
let infinity = 2;


function setup() {
  createCanvas(canvas, canvas);
}

function draw() {
  background(255);
  for (x = 0; x < width; x+=1) {
    for (y = 0; y < height; y+=1) {
      var c_real = map(x, 0, width, -2, 2);
      var c_imag = map(y, 0, height, -2, 2);
      var z_real = 0;
      var z_imag = 0;
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
      if(n == max_iterations)
        c = 0;
      else
        c = map(n, 0, max_iterations, 0, 255);
      stroke(0,c,c);
      strokeWeight(5);
      point(x, y);
    }
  }
  noLoop();
}
