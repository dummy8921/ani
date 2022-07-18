// https://teachablemachine.withgoogle.com/models/udfFiJ_Aw/
function tetra(){
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/',modelReady);

}
function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,results){
console.log('gotResults');
}
