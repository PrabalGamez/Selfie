var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        console.log("taking selfie :)");
        speak();
    }

}

function speak() {
    synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    utter_dis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_dis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img src=" + data_uri + " id='captured_img'>"
    });
}

function save(){
 link = document.getElementById("a");
 img = document.getElementById("captured_img").src;
 link.href = img;
 link.click();
}