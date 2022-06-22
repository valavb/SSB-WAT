var words = ["Scene", "Impossible", "Society", "Choose", "Unjust", "Image", "Exam", "Drive", "Internet", "Communication", "Keys", "Murder", "Commit", "Flee", "Practice", "Organize", "Phone", "New", "Agency", "Security", "Since", "Peace", "Fall", "Hi", "Run", "Chase", "Enter", "Industry", "Limit", "Development", "Coach", "Food", "Special", "Biomass", "Release", "Head", "Launch", "Medal", "Play", "Department", "Under", "Curb", "Cooperate", "HIke", "War", "Normal", "Challenge", "Serving", "Bane", "Rapid", "Actress", "obstacles", "Strict", "Forceful", "Citizens", "Team", "Anxious", "Knowledge", "Polite", "Integrity", "Serve", "Loyal", "Equality", "Justice", "Gratitude", "Rare", "Heavy", "Rude", "Explanation", "Pilot", "Pirate", "Ship", "Captain", "Camp", "Rights", "Ragging", "Rust", "Patriotism", "Primary", "Performance", "Pity", "Meeting", "Obedience", "Quick", "Quiet", "Quotes", "Question", "Try", "Unity", "Urge", "Friendship", "Close", "Migrate", "Decline", "Fly", "Highest", "Shall"]
var display = document.querySelector('#time');
var word = document.querySelector('#word');
var fiveMinutes = 15;
message = "1.60 words would be shown one by one.\r\n2.Each word will appear for only 15 seconds.\r\n3.The candidate has to read the word and write appropriate sentences at the same time.\r\n4.There will be no gap between two simultaneous words.\r\n5.The words can be positive or negative.\r\n6.The duration of WAT is 15 minutes."
let wordCount = 0;
var timerToggle = document.getElementById('timer-on-off');
var timeIcon = document.querySelector('.time-icon');
var timeSecond = document.querySelector('#time');

const getWord = () => {
  var len = words.length;
  var wordNo = Math.floor(Math.random() * wordCount);
  wordCount += 1;
  word.innerHTML = "<b>" + wordCount + ". " + words[wordNo] + "</b>";
  words.splice(wordNo, 1);
};
let tId;
const wrapper = document.querySelector('.wrapper');
alert(message)
getWord()
startTimer(fiveMinutes, display);


function startTimer(duration, display) {
  var timer = duration,
    minutes, seconds;
  tId = setInterval(function() {
    if (words.length === 0) {
      wrapper.innerHTML = "<div class='text-center fs-3 mt-3 text-danger'>Test Ended</div>"
      clearInterval(tId);
      return
    }

    seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = seconds;

    if (--timer < 0) {
      timer = duration;
    }
    if (seconds == 5) {
      display.style.color = 'red';
    }
    if (seconds > 5) {
      display.style.color = 'unset';
    }

    if (seconds == 00) {
      getWord()
    }

  }, 1000);


}

function showHideTimer(){
  
  if(timerToggle.checked){
    timeIcon.style.display = 'block';
    timeSecond.style.display = 'block';
  }

  else{
    timeIcon.style.display = 'none';
    timeSecond.style.display = 'none';
  }
}