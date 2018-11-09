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
    var w = 100;
    var h = 100;

    // cnv.mousePressed(() => {
    // })

    takeSnapshot()

    for (var i = 0; i < snapshots.length; i++) {
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
    tint(random(100, 255), random(100, 255), random(100, 255))
    snapshots.push(video.get())
}