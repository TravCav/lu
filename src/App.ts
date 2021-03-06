import { Entity } from "./Entity";
import { Projects } from "./Projects";
import { DoWork } from "./Work";

console.log("begin");

const stanley = new Entity("Stanley");

let workDone = false;
while (!workDone) {
    workDone = DoWork(stanley, new Entity("Project1"));
}
console.log("project1 done\r\n");

workDone = false;
while (!workDone) {
    workDone = DoWork(stanley, new Entity("Project2"));
}
console.log("project2 done\r\n");

console.log("done");
