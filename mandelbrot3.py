import turtle

def diverge(c_real, c_imag):

    z_real = 0
    z_imag = 0
    fz_real = 0
    fz_imag = 0
    n = 0

    while n < 100:
        fz_real = (z_real * z_real) - (z_imag * z_imag) + c_real
        fz_imag = (2 * z_real * z_imag) + c_imag
        z_real = fz_real
        z_imag = fz_imag
        n += 1
        if fz_real > 2 or fz_imag > 2:
            return n
    return 100


t = turtle.Turtle()

turtle.tracer(0, 0)
t.speed('fastest')
t.pensize(2)
t.left(45)


turtle.colormode(255)
x = -200
y = -200
while x <= 200:
    y = -200
    while y <= 200:
        plot = diverge(x/100, y/100)
        if plot == 100:
            t.color(0,0,0)
            t.penup()
            t.setpos(x , y )
            t.pendown()
            t.forward(0.1)

        else:
            p = int((2.5 * plot))
            t.color(255 - p, 255 - p, 255 - p)
            t.penup()
            t.setpos(x , y )
            t.pendown()
            t.forward(0.1)
        y += 0.5
    x += 0.5
    turtle.update()

turtle.mainloop()

