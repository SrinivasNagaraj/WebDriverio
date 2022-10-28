var xlsx=require("xlsx");
var wb=xlsx.readFile("./test/specs/testdata/wdiotestdata.xlsx")
let sheet=wb.SheetNames
let ws =wb.Sheets['Sheet1'];
let excelData=xlsx.utils.sheet_to_json(ws)
 console.log(excelData);
// console.log(excelData[0].url);
// console.log(excelData[0].username);
// console.log(excelData[0].password);
console.log(excelData[0].module);
console.log(excelData[0].productname);
console.log(excelData[0].partnumber);