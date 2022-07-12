const date = new Date()
let $month = document.getElementById('js-month')
let year = date.getFullYear()
let mon = date.getMonth() + 1
const start = new Date(year, mon - 1, 1)
const end = new Date(year, mon, 0)
const month_len = end.getDate()
const day = start.getDay()
let $da = document.getElementsByClassName('cal')
let $day_color = document.getElementsByClassName('day')
const cal_length = $da.length

$month.textContent = `${year}年 ${mon}月`

for (let i = 0; i < month_len; i++) {
    $da[day + i].textContent = i + 1
}

for (let i = 0; i < cal_length; i++) {
    if (i % 7 == 0) {
        $da[i].style.color = "red"
    }
    if (i % 7 == 6) {
        $da[i].style.color = "blue"
    }
}

$day_color[0].style.color = "red"
$day_color[6].style.color = "blue"