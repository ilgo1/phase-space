


export const presets = [
  
  {
    name:"Lorenz",
    x: `(10*(y-x))*0.01`,
    y: `(x*(28-z)-y)*0.01`,
    z: `(x*y-(8/3)*z)*0.01`,
    v: -0,
    step: 0,
    max: 0,
    pointSize: 0.1,
    sizeRatio:true,
    camPos:[-40,16,-4],
    camPitch:-0.36,
    camYaw:0.6,
    setNum: 50,
    setLength: 100,
    pointStart:[0,0,0],
    startRandomness:100,
  },
  
  {
    name:"Lorenz (Bifurcation)",
    x: `(10*(y-x))*0.01`,
    y: `(x*(28-z)-y)*0.01`,
    z: `(x*y-(v)*z)*0.01`,
    v: 0.3,
    step: 16,
    max: 1,
    pointSize: 0.04,
    sizeRatio:true,
    camPos:[-18,6,9],
    camPitch: -0.3,
    camYaw: 0.7,
    setNum: 1,
    setLength: 20000,
    pointStart:[0,0,0],
    startRandomness:100,
  },
  {
    name:"Rössler",
    x: `-(y+z)*0.05`,
    y: `(x+0.2*y)*0.05`,
    z: `(0.2+z*(x-5.7))*0.05`,
    v: -0,
    step: 0,
    max: 0,
    pointSize: 0.05,
    sizeRatio:true,
    camPos:[-14,13,26],
    camPitch:-0.5,
    camYaw:-1,
    setNum: 50,
    setLength: 100,
    pointStart:[0,0,0],
    startRandomness:10,
  },  
  {
    name:"Rössler (Bifurcation)",
    x: `-(y+z)*0.05`,
    y: `(x+v*y)*0.05`,
    z: `(0.2+z*(x-5.7))*0.05`,
    v: 0.06,
    step: 16,
    max: 0.4,
    pointSize: 0.02,
    sizeRatio:true,
    camPos:[-14,13,26],
    camPitch:-0.5,
    camYaw:-1,
    setNum: 1,
    setLength: 20000,
    pointStart:[1,1,1],
    startRandomness:0,
  },
  {
    name:"Thomas",
    x: `(Math.sin(y)-0.087*x)*0.2`,
    y: `(Math.sin(z)-0.087*y)*0.2`,
    z: `(Math.sin(x)-0.087*z)*0.2`,
    v: -0,
    step: 0,
    max: 0,
    pointSize: 0.04,
    sizeRatio:true,
    camPos:[17,13,16],
    camPitch:-0.55,
    camYaw:-2.4,
    setNum: 400,
    setLength: 30,
    pointStart:[0,0,0],
    startRandomness:10,
  },  
  {
    name:"\"Particles\"",
    x: `(10*(y-x))*0.005+Math.cos(v*8+y/z)`,
    y: `(x*(28-z)-y+v/z)*0.005-Math.sin(v*4+z/10)`,
    z: `(x*y-(8/3)*z)*0.005`,
    v: 0,
    step: 18.5,
    max: 3,
    pointSize: 0.05,
    sizeRatio:true,
    camPos:[-40,16,-4],
    camPitch:-0.36,
    camYaw:0.6,
    setNum: 5000,
    setLength: 2,
    pointStart:[0,0,0],
    startRandomness:100,
  },
  {
    name:"\"Clouds\"",
    x: `(x-z*0.001*y)*0.002`,
    y: `(Math.cos(100*z/x)*400)*0.002`,
    z: `(x/z*500*Math.sin(y*44))*0.002`,
    v: 0,
    step: 0,
    max: 0,
    pointSize: 0.2,
    sizeRatio:true,
    camPos:[-74,12,-5],
    camPitch:-0.17,
    camYaw:-0.17,
    setNum: 50,
    setLength: 300,
    pointStart:[0,0,0],
    startRandomness:100,
    respawnRate:20,
  },
  {
    name:"???",
    x: `(x*0.13+y*z)*0.001`,
    y: `(x*0.01-0.4*y-z*x)*0.001`,
    z: `(-z-x*y)*0.001`,
    v: -0.66,
    step: 14.5,
    max: 1,
    pointSize: 0.1,
    sizeRatio:false,
    camPos:[-95,71,0],
    camPitch: -0.6,
    camYaw:0.0,
    setNum: 50,
    setLength: 200,
    pointStart:[0,0,0],
    startRandomness:100,
  },
  
];
