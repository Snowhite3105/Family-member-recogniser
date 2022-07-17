Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality: 90
});
camera=document.getElementById("webcam")
Webcam.attach ('#webcam');

function CaptureSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });}
    console.log("ml5version",ml5.version);
    classifier =ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/1DMsFT2u2/model.json',modelLoaded);
  
    function modelLoaded(){
        console.log('model.is.loaded')
    }
function check()
{
    img= document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3)
    }
}
