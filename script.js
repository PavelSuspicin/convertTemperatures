function cToF(celsius) {
    let celTof = (celsius * 9) / 5 + 32
    console.log(`${celsius} to ${celTof} `)
}
cToF(60)

function fToC(fahr) {
    let farToC = ((fahr - 32) * 5) / 9
    console.log(`${fahr} to ${farToC}`)
}
fToC(45)
