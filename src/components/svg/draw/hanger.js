

// let pattern ;

// let itval = {
//   x: [],
//   y: []
// }
export const findIntervals = (start, end, numOfIntervals) => {
  let interval = (start -end)/ numOfIntervals
  
  const array = new Array(numOfIntervals+1).fill(0).map( (val, i) => val = start-(i*interval) )
    return ({array, interval})
}


export const preventKeys= ( e, codes=[] ) => {
  if(codes.indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}


export const DrawModes = (
  mode,
  itval={x: null, y: null},
  pos={x: null, y: null},
  next={x: [], y: []},
  settings={
    interval: {
      x: null,
      y: null
    }
  }
  ) => {
  
  let pattern
// 
  switch (mode){

    case 0:
      pattern = itval.x.map( (v,i) => [itval.x[i], itval.y[i], pos.x, pos.y])
      break;

    case 1:
      pattern = []
      for(let i =0; i<itval.x.length-1; i++){
        pattern.push(
          itval.x[i], itval.y[i], 
          next.x[i], next.y[i], 
          next.x[i]-settings.interval.x, next.y[i]-settings.interval.y )
      }
      break;

    case 2:
      pattern = []
      for(let i = 0; i<itval.x.length-1; i++){
        pattern.push(
          itval.x[next.x.length-1-i], itval.y[next.y.length-1-i], 
          next.x[i], next.y[i],
          next.x[i+1], next.y[i+1]
        )
      }
      break

    case 3:
      pattern = itval.x.map( (v,i) => [
        itval.x[i], itval.y[i], 
        next.x[next.x.length-1-i], next.y[next.y.length-1-i] ])
      break;
    case 4:
      pattern = itval.x.map( (v,i) => [ pos.x, pos.y])
      break;
    
    case 5:
      pattern = itval.x.map( (v,i) => [ pos.x, pos.y])
      break;

    default:
      pattern = itval.x.map( (v,i) => [ pos.x, pos.y])
      return ({lazerMode: 0})
    
  }
  return [].concat.apply([], pattern)
}


