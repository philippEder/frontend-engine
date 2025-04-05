import { RouterOutlet } from '@angular/router';
import { AfterViewInit, OnInit, Component, ElementRef, ViewChild } from '@angular/core';
import { dia, shapes } from '@joint/core'

@Component({
  selector: 'engine-canvas',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class Canvas {

  private graph: dia.Graph;
  private paper: dia.Paper;

  public ngOnInit(): void {
    this.graph = new dia.Graph({}, { cellNamespace: shapes });
    this.createPager()
    this.createExampleWorkflow()
  }

  public addModule(name: String): dia.Element {
    const rect = new shapes.standard.Rectangle({
        position: { x: 100, y: 100 },
        size: { width: 100, height: 50 },
        attrs: {
            label: {
                text: `${name}`
            }
        }
      });
    
      this.graph.addCell(rect);

      return rect
  }

  public addTool(): dia.Element {
    const rect = new shapes.standard.Rectangle({
        position: { x: 100, y: 100 },
        size: { width: 50, height: 50 },
        attrs: {
            body: {
                fill: "yellow"
            }
        }
      });
    
      rect.rotate(45)
      this.graph.addCell(rect);

      return rect
  }

  private createPager() {
    this.paper = new dia.Paper({
        el: document.getElementById('canvas'),
        model: this.graph,
        background: {
            color: '#F8F9FA',
        },
        frozen: true,
        async: true,
        sorting: dia.Paper.sorting.APPROX,
        cellViewNamespace: shapes
    });
  }

  private addLink(source: dia.Element, target: dia.Element) {
    var link = new shapes.standard.Link();
    link.source(source);
    link.target(target);
    link.addTo(this.graph);
  }

  public ngAfterViewInit(): void {
    const { paper } = this;
    paper.unfreeze();     
  }

  private createExampleWorkflow() {
    let model1 = this.addModule("create supplier")
    let model2 = this.addModule("send email")
    let model3 = this.addModule("buy stuff")

    this.addLink(model1, model2)
    this.addLink(model2, model3)
  }

  public printJson() {
    let graphJson = JSON.stringify(this.graph.toJSON());
    console.log(graphJson)
  }




}
