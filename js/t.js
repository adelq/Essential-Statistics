//Variables and Constants
var Pi=Math.PI; var PiD2=Pi/2; var PiD4=Pi/4; var Pi2=2*Pi
var e=2.718281828459045235; var e10 = 1.105170918075647625
var Deg=180/Pi
//Prerequisite functions
function StatCom(q,i,j,b) {
    var zz=1; var z=zz; var k=i; while(k<=j) { zz=zz*q*k/(k-b); z=z+zz; k=k+2 }
    return z
    }

function Fmt(x) { 
var v
if(x>=0) { v=''+(x+0.00005) } else { v=''+(x-0.00005) }
return v.substring(0,v.indexOf('.')+5)
}

//Calculation for probability
function StudT(t,n) {
    t=Math.abs(t); var w=t/Math.sqrt(n); var th=Math.atan(w)
    if(n==1) { return 1-th/PiD2 }
    var sth=Math.sin(th); var cth=Math.cos(th)
    if((n%2)==1)
        { return 1-(th+sth*cth*StatCom(cth*cth,2,n-3,-1))/PiD2 }
        else
        { return 1-sth*StatCom(cth*cth,1,n-3,-1) }
    }

//Calculation for T Score
function AChiSq(p,n) { var v=0.5; var dv=0.5; var x=0
    while(dv>1e-10) { x=1/v-1; dv=dv/2; if(ChiSq(x,n)>p) { v=v-dv } else { v=v+dv } }
    return x
    }

//Display evaluated results
function CalcT(form) { form.pt.value=Fmt(StudT(eval(form.t.value),eval(form.nt.value))) }
function CalcTr(form) { form.t.value=Fmt(AStudT(eval(form.pt.value),eval(form.nt.value))) }
