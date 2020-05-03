/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const w = process.stdout.columns/3

let output = ''

function draw (counter) {
  if (counter >= 10) return 1
  else if (counter % 2 === 0){
    output = ''
    for (let i = 0; i < w; i++) {
      if (Math.random() > 0.5) {
        output += '╲┋╱'
      } else {
        output += '╱┋╲'
      }
    } 
  } 
  else {
      output = output.split('').reverse().join('');      
  }
    console.log(output)
    setTimeout(draw, 5, counter+1)
}

draw(0)
