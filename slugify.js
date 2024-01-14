

//write a function for conversion of title to slug
//Eg: "Back-End and Web Development Trends for 2024" => "back-end-and-web-development-trends-for-2024"

// const slugify =(string)=>{
//     return string.split(" ")
//     .map((word)=> word.toLowerCase())
//     .join("-");

// };
//  const result= slugify("Back-End and Web Development Trends for 2024")
// console.log({result});




const slugify = require("slugify");
const result= slugify("Back-End and Web Development Trends for 2024",
{lower: true,
});
console.log({result});