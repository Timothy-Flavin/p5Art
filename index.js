const w=1920
const h=920


const Ball = {
    dir: 0,
    bias: 0.01,
    x:w/2,
    y:h/2,
    speed:1.0,
    col: [
        Math.random()*255,
        Math.random()*255,
        Math.random()*255
        ],
    dcol: [
        Math.random()-0.5,
        Math.random()-0.5,
        Math.random()-0.5
    ],

    move: function (){
        this.n+=0.1
        this.x+=cos(this.dir)*this.speed;
        this.y+=sin(this.dir)*this.speed;
        if(this.x<0 || this.x>w){
            this.x = w/2
        }
        if(this.y<0 || this.y>h){
            this.y = h/2
        }
        this.speed = 2 + 1*Math.sin(this.n)
    },
    changedir: function(){
        this.dir+=(Math.random()-(0.5-this.bias))/1.0
    },
    changecol: function(){
        for(let i=0; i<3; i+=1){
            this.col[i]+=this.dcol[i]
            if(this.col[i]>255){
                this.col[i]=255
                this.dcol[i]=-Math.random()/32.0
            }
            if(this.col[i]<0){
                this.col[i]=0
                this.dcol[i]=Math.random()/32.0
            }
        }
    },
    init(){
        this.n=0
    }
}
  
let balls = [

]
function setup() {
    canvas = createCanvas(w, h);
    for(let i=0; i<1000; i+=1){
        temp=Object.create(Ball)
        temp.init()
        balls.push(temp)
    }
}

function draw() {
    for(let i=0; i<balls.length; i+=1){
        balls[i].changedir();
        balls[i].changecol()
        balls[i].move();

        noStroke();
        fill(balls[i].col[0],
            balls[i].col[1], 
            balls[i].col[2]);
        ellipse(balls[i].x, balls[i].y, 10, 10);
    }
}