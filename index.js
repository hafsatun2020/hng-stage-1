
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

const month = new Array()
        month[0] = "Janury"
        month[1] = "Febuary"
        month[2] = "March"
        month[3] = "April"
        month[4] = "May"
        month[5] = "June"
        month[6] = "July"
        month[7] = "August"
        month[8] = "September"
        month[9] = "October"
        month[10] = "November"
        month[11] = "December"


document.addEventListener('click', function(e){
    console.log(e.target.dataset.testid) 
    const username = document.getElementById('username')
    if(e.target.dataset.testid ){
        e.target.dataset.testid === `slackUserName` ? 
        console.log(username.dataset) : e.target.dataset.testid === 'slackDisplayImage' ? 
        console.log(e.target.dataset.testid) : e.target.dataset.testid === 'currentDayOfTheWeek' ?
        console.log(e.target.dataset.testid) : e.target.dataset.testid === 'currentUTCTime' ?
        console.log(e.target.dataset.testid) : e.target.dataset.testid === 'myTrack' ?
        console.log(e.target.dataset.testid) : e.target.dataset.testid === 'githubURL '?
        console.log(e.target.dataset.testid) : console.log('Invalid')
    }
    
})
const currentDay = weekday[currentDateTime.getDay()]
let hours =  currentDateTime.getUTCHours()
const AMPM = hours >= 12 ? 'PM' : 'AM'

if(hours === 12){
    hours=12
}else{
    hours = hours%12
}
const clockEl= document.getElementById('clock')
setInterval(getTime, 1000)

function getTime(){
    const time = new Date
     timeEl.innerHTML =  time.getTime()
     clockEl.innerHTML = hours + `:` + time.getUTCMinutes() + `:` + time.getSeconds() + `:` + time.getUTCMilliseconds() +  AMPM

}

dayEl.innerHTML = ` ${ currentDay}, ${month[currentDateTime.getMonth()]} ${currentDateTime.getFullYear()}.`
