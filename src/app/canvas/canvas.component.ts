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
    this.addModule("test")
  }

  public addModule(name: String) {
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

  public ngAfterViewInit(): void {
    const { paper } = this;
    paper.unfreeze();     
  }


}
