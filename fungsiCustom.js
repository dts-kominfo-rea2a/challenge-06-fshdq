// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
function bacaData(fnCallBack){
  const hasilAkhir = [];
  fs.readFile(file1, "utf8", (err, data) => {
    if (err) return fnCallBack(err, null);
    const message1 = JSON.parse(data).message.split(" ");
    hasilAkhir.push(message1[1]);
    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) return fnCallBack(err, null);
      const message2 = JSON.parse(data)[0].message.split(" ");
      hasilAkhir.push(message2[1]);
      fs.readFile(file3, "utf-8", (err, data) => {
        if (err) return fnCallBack(err, null);
        const message3 = JSON.parse(data)[0].data.message.split(" ");
        hasilAkhir.push(message3[1]);
        fnCallBack(null, hasilAkhir);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
