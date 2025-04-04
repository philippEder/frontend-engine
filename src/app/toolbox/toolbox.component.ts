import { Component, Input } from "@angular/core";
import { Module } from "../models/module";
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

    modules: Module[] = [
        new Module("send Email", () => console.log("rectangle clicked")),
        new Module("create Reiserechnung", () => console.log("rectangle clicked")),
        new Module("enjoy Live", () => console.log("rectangle clicked"))
    ]

    tools: Tool[] = [
        new Tool("If - Else")
    ]

    @Input()
    canvas: Canvas;


    addModuleToCanvas(module: Module) {
        this.canvas.addModule(module.name);
    }

    addToolToCanvas(tool: Tool) {
        this.canvas.addTool();
    }



}