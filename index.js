
const timeEl = document.getElementById('time')
const dayEl = document.getElementById('day')
const currentDateTime = new Date()

const weekday = new Array(7)
        weekday[0] = "Sunday"
        weekday[1] = "Monday"
        weekday[2] = "Tuesday"
        weekday[3] = "Wednesday"
        weekday[4] = "Thursday"
        weekday[5] = "Friday"
        weekday[6] = "Saturday"

document.addEventListener('click', function(e){
    console.log(e.target.dataset.testid)
})

const currentDay = weekday[currentDateTime.getDay()]
dayEl.innerHTML =  currentDay 

setInterval(getTime, 100)

function getTime(){
    const time = new Date
     timeEl.innerHTML =  time.getTime()
}
