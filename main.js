function aliens(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Bu2e3Hxqg/model.json",modelready)
}
function modelready(){
classifier.classify(gotResult)
}
function gotResult(error,results){
    if (error) {
        console.error(error)
    } else {
       console.log(results)
       document.getElementById("hear").innerHTML="I can hear "+results[0].label
       document.getElementById("accuracy").innerHTML="accuracy "+(results[0].confidence.toFixed(4))*100+"%"
       img1=document.getElementById("img1")
       img2=document.getElementById("img2")
       img3=document.getElementById("img3")
       img4=document.getElementById("img4")
       if (results[0].label=="Clapping") {
        img1.src="aliens-01.gif"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
       } else if (results[0].label=="Snapping") {
        img1.src="aliens-01.png"
        img2.src="aliens-02.gif"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
       } else if (results[0].label=="Bell") {
        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.gif"
        img4.src="aliens-04.png"
       } else  {
        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.gif"
       }
       
        
       
    }
}