import numpy


def generate_mandelbrot():

    w = int(input('Enter width of image: '))
    h = int(input('Enter height of image: '))
    name_input = input('Enter name of file : ')

    re_min = -2.0
    re_max = 2.0
    im_min = -2.0
    im_max = 2.0
    name = (str(name_input) + '.pgm')
    real_range = numpy.arange(re_min, re_max, (re_max - re_min) / w)
    image_range = numpy.arange(im_max, im_min, (im_min - im_max) / h)
    output = open(name, 'w')
    output.write('P2\n# Julia Set image\n' + str(w) + ' ' + str(h) + '\n255\n')
    for im in image_range:
        for re in real_range:
            c = complex(re, im)
            z = complex(0, 0)
            n = 255
            while abs(z) < 10 and n >= 5:
                z = (z * z) + c
                n -= 5
            output.write(str(n) + ' ')
        output.write('\n')
    output.close()

    print('Created photo ' + name)


generate_mandelbrot()
