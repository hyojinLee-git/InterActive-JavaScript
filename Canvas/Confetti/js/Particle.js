import { randomNumBetween } from "./util.js";


export default class Particle{
    constructor(x,y,deg=0){
        this.angle=Math.PI/180*randomNumBetween(deg-30,deg+30)
        this.r=randomNumBetween(30,100)
        this.x=x;
        this.y=y;

        this.vx=this.r*Math.cos(this.angle)
        this.vy=this.r*Math.sin(this.angle)

        this.friction=0.89
        this.gravity=0.5

        this.width=30
        this.height=30
    }

    update(){
        this.vy+=this.gravity

        this.vx*=this.friction
        this.vy*=this.friction

        this.x+=this.vx
        this.y+=this.vy
    }

    draw(ctx){
        ctx.fillStyle='red'
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}