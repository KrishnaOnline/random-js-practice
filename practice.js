const p = new Promise((res, rej) => {
    res("Promise Resolved !!")
});
async function getData() {
    return p;
};
const data = getData();
data.then(() => {console.log("Promise Then is Called")});
p.then(() => {console.log("Promise Then is Called")});