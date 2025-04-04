import { Component, Input } from "@angular/core";
import { Tool } from "../models/tool";
import { CommonModule } from "@angular/common";
import { Canvas } from "../canvas/canvas.component";


@Component({
    templateUrl: "./toolbox.component.html",
    styleUrl: "./toolbox.component.scss",
    imports: [CommonModule, Canvas],
    standalone: true,
    selector: "engine-toolbox"
})
export class Toolbox {

    tools: Tool[] = [
        new Tool("rectangle", () => console.log("rectangle clicked"))
    ]

    @Input()
    canvas: Canvas



    addToolToCanvas(tool: Tool) {
        console.log("adding tool ${tool.name}")
        this.canvas.addModule(tool.name)
    }



}