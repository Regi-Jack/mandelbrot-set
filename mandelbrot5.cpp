#include<GL/glut.h>
#include<iostream>
#include <math.h>
using namespace std;
float canvas = 500;
float scale = canvas/2;
int maxiter = 100;
void initialise() {

	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	glOrtho(-canvas, canvas, -canvas, canvas, -1, 1);
	glClearColor(1.0, 1.0, 1.0, 0.0);	
	glClear(GL_COLOR_BUFFER_BIT);
}

int diverge(float creal, float cimag) {

	float zreal = 0;
	float zimag = 0;
	float fzreal = 0;
	float fzimag = 0;
	for(int i=0; i<maxiter; i++) {
		fzreal = zreal*zreal - zimag*zimag + creal;
		fzimag = 2*zreal*zimag + cimag;
		zreal = fzreal;
		zimag = fzimag;
		if(fzreal > 2)
			return i;
	}
	return maxiter;
}

void mandelbrot() {
	int p;
	glBegin(GL_POINTS);
	for(float i=-canvas; i<canvas; i+=0.5) {
		for (float j=-canvas; j<canvas; j+=0.5) {
			p = diverge(i/scale,j/scale);
			if(p == maxiter) {
				glColor3f(0,0,0);
				glVertex2f(i,j);
			}
			else {
				float c = 1 - (0.01*(float)p);
				glColor3f(c,c,0);
				glVertex2f(i,j);
			}
		}
	}
	glEnd();
	glFlush();
}

int main(int argc, char** argv) {
	glutInit(&argc, argv);
	glutCreateWindow("MandelBrot Set");
	initialise();
	glutInitWindowSize(1920,1080);
	glutInitWindowPosition(0,0);
	glutDisplayFunc(mandelbrot);
	glutMainLoop();
	return 0;
}
