const properCase =(string)=>{
const splittedWords = string.split(" ")
.map((word)=>{
    const splitter =word.split("");
    splitter[0] = splitter[0].toUpperCase();
    return splitter.join("");
})
.join(" ");
console.log(splittedWords);
};
    module.exports = {properCase};