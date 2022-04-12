var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Playing Video");
	video.play();
	console.log("The current volume is " + video.volume * 100 + "%");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pausing Video");
	video.pause();
});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is " + video.playbackRate);
	video.playbackRate /= .95;
	console.log("Current speed is " + video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is : " + video.playbackRate);
	video.playbackRate *= .95;
	console.log("Current speed is : " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping Video");
	console.log(video.currentTime);
	video.currentTime += 15;
	console.log(video.currentTime);

	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + !video.muted);
	if (video.muted == false) {
		document.querySelector("#mute").innerHTML = "Unmute"
		video.muted = true;
		document.querySelector("#slider").innerHTML = 0;
		document.querySelector("#volume").innerHTML = "0%";
	}
	else {
		document.querySelector("#mute").innerHTML = "Mute"
		video.muted = false;
		document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value/100;
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});