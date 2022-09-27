import { Component, OnInit } from '@angular/core';
// import { DndDropEvent } from 'ngx-drag-drop';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

    files: File[] = [];

	onSelect(event:any) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event:any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}


}
