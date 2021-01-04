//first install moment
// npm install moment

var moment =require("moment");

function formatDate(dateString) {
    console.log(moment(dateString).format("DD MM YYYY"));
    console.log(moment(dateString).format("DD MM YY"));
    console.log(moment(dateString).format("ddd DD MM YYYY"));
    console.log(moment(dateString).format("ddd MMMM DD MM YYYY"));
}
formatDate("2021-01-03");

function calculateAge(dateString) {
    console.log(moment(dateString).fromNow());
}
calculateAge("1983-07-01");