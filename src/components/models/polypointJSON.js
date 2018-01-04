
Array.prototype.rotate = function(n) {
    return this.slice(n, this.length).concat(this.slice(0, n));
}

function findSteps(sides,steps, stepLength, endPoint, center) {
  let result = []

  for (let j = 1; j < steps+1; j++) { // step down

    if (endPoint > 0) {//if the values are negative they need to add visa versa
      result[j-1]=(Number(endPoint) - stepLength*j)

    }else if (Math.abs(endPoint) === 0){
      result[j-1]= (Number(endPoint))

    }else if(endPoint < 0){
      result[j-1]= (Number(endPoint)+(stepLength*j))
    }
  }
  // for (let j = 1; j < steps; j++) { // step down
  //   if (endPoint > center) {//if the values are negative they need to add visa versa
  //     result[j-1]=(Number(endPoint) - stepLength*j)
  //
  //   }else if (Math.abs(endPoint) == center){
  //     result[j-1]= (Number(endPoint))
  //
  //   }else if(endPoint < center){
  //     result[j-1]= (Number(endPoint)+(stepLength*j))
  //   }
  // }
  return result
}

function reverseOdd(data) {
  for (let i = 0; i < Object.keys(data).length; i++) {
    if (i%2 === 0) {
      data[`_${i}`].x.reverse();
      data[`_${i}`].y.reverse();
    }
  }
  return data
}

function arrangeNoLayers(data) {
  let result = ""

  for (let c = 0; c < data["_0"].x.length; c++) {//for each coordinate pair
    for (let key in data) {
      result += `${data[`${key}`].x[c]},${data[`${key}`].y[c]}  `
    }
    result += `${data[`_0`].x[c]},${data[`_0`].y[c]}  `
  }
  return `<polygon points="${result}"/>`
}

function arrangeLayers(data) {
  let result = []

  for (let c = 1; c < data["_0"].x.length-1; c++) {//for each coordinate pair
    let temp = ""
    for (let key in data) {
      temp+= `${data[`${key}`].x[c]},${data[`${key}`].y[c]}  `
    }
    result.push(`<polygon id="_${c}" points="${temp}"/>\n`)
  }
  return result
}

function angles(sides){ return ( 2*( Math.PI/sides ) )}

// The purpose if this function is to return a string art SVG based upon the width & hieght (in viewpoints), the number of side and the number of steps (or intervals)
export default function polypoint(w, h, sides, steps, layers=true) {
  let centerX, centerY, lengthX, lengthY;
  let d, endpoint, stepX, stepY, data , endX, endY
  // find center point
  centerX = ( h/2 );
  centerY = ( w/2 );
  lengthX = (centerX-(h%steps) );
  lengthY = (centerY-(w%steps) );
  stepX = lengthX/steps
  stepY = lengthY/steps

  d = angles(sides)
  data = new Object()
  for (let i = 0; i < sides; i++) {
      data[`_${i}`]={
        x:[Math.round( (lengthX*Math.cos(d*i)) /*+centerX*/)],
        y:[Math.round( (lengthY*Math.sin(d*i)) /*+centerY*/)]
      }
    }

  // console.log("___________".yellow);
  // console.log(data);
  // console.log("___________".yellow);

  for (let i = 0; i < sides; i++) { //take each side

    endX = data[`_${i}`].x //store X endpoint
    endY = data[`_${i}`].y //store Y endpoint
//if layered steps needs to be plus one!
    data[`_${i}`].x = data[`_${i}`].x.concat(findSteps(sides,steps,stepX, endX, centerX) )
    data[`_${i}`].y = data[`_${i}`].y.concat(findSteps(sides,steps,stepY, endY, centerY) )
  }
  // console.log("___________".yellow);
  // console.log(data);
  // console.log("___________".yellow);
  // console.log(centerX,centerY);

  // reverse alternating sides
  data = reverseOdd(data)
  let points = layers?(`${arrangeLayers(data)}`):(`${arrangeNoLayers(data)}`)
return(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}px" height="${h}" viewbox="-${w/2} -${h/2} ${w} ${h}">\n<g class="polypoint" id="_${sides}_${steps}">\n`
    +
    points
    +
    `\n</g>
    </svg>`);
}

polypoint(200,200,4,4)
