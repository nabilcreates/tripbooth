var cnv;
var video;
var snapshots = [];

function setup() {
    cnv = createCanvas(window.innerWidth, window.innerHeight)
    video = createCapture(VIDEO)
    video.hide()
    background(0)
}

function draw() {
    var x = 0;
    var y = 0;
    
    var w = width/  2;
    var h = height/ 2;

    // cnv.mousePressed(() => {
    // })

    takeSnapshot()

    for (var i = 0; i < snapshots.length; i++) {

        tint(random(100, 255), random(100, 255), random(100, 255))
        image(snapshots[i], x, y, w, h)
        
        x += w

        if (x >= width) {
            x = 0;
            y += h;
        }

        if (y >= height) {
            x = 0;
            y = 0;
        }

    }

}

function takeSnapshot() {
    snapshots.push(video.get())
}