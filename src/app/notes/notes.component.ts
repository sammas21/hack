import {Component, OnInit} from '@angular/core';
import {NoteServiceService} from '../note-service.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  statusList: string[] = ['All', 'Active', 'Completed'];


  selectedTab : string;

  notes : Note[]= [];

  ngOnInit(): void {


  }

  onAddNote(){
    
  }



}

export interface Note {
  title: string;
  status: string
}
