function normalcdf(form)
{
z = form.pbox2.value
t = (z > 0) ? z : (- z)
p = 1 - Math.pow((1 + (t * (0.0498673470 + t * (0.0211410061 + t *
(0.0032776263 + t * (0.0000380036 + t * (0.0000488906 + t *
0.0000053830))))))), -16) / 2
form.zbox2.value = (z > 0) ? p : (1 - p)
}

function invnorm(form)
{
p = form.prob.value
t = (p > .5) ? (1 - p) : p
s = Math.sqrt(-2.0 * Math.log(t))
a = 2.515517 + (0.802853 * s) + (0.010328 * s * s)
b = 1 + (1.432788 * s) + (0.189269 * s * s) + (0.001308 * s * s * s)
u = s - (a / b)
form.zval.value = (p < .5) ? (- u) : u
}
