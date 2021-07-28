var cloud = document.querySelector("#cloud-div");

var cloudAnimate = cloud.animate(
    [
        {transform: 'translate(100%,0)'},
        {transform: 'translate(-100%,0)'},
    ],{
        duration: 5000,
        iterations: Infinity
    }
)

var bird = document.getElementById('bird-div');

var birdAnimate = bird.animate(
    [
        {transform: 'translate(100%,0)'},
        {transform: 'translate(80%,0)'},
        {transform: 'translate(60%,20%)'},
        {transform: 'translate(40%,10%)'},
        {transform: 'translate(20%,20%)'},
        {transform: 'translate(0,0)'},
        {transform: 'translate(-20,0)'},
        {transform: 'translate(-50,0)'},
        {transform: 'translate(-80,0)'},
        {transform: 'translate(-100%,0)'},
    ],{
        duration: 5000,
        iterations: Infinity
    }
)

var plane = document.getElementById("plane-div");

var planeAnimate = plane.animate(
    [
        {transform: 'translate(-10%,40%)'},
        {transform: 'translate(0%,40%)'},
        {transform: 'translate(10%,40%)'},
        {transform: 'translate(20%,0%)'},
        {transform: 'translate(30%,0%)'},
        {transform: 'translate(40%,0%)'},
        {transform: 'translate(50%,0%)'},
        {transform: 'translate(60%,0%)'},
        {transform: 'translate(70%,0%)'},
        {transform: 'translate(80%,40%)'},
        {transform: 'translate(90%,40%)'},
        {transform: 'translate(100%,40%)'},
    ],{
        duration: 5000,
        iterations: Infinity
    }
)