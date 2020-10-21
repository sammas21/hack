import { Injectable } from '@angular/core';
import {Note} from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {


  notes: Note[]=[];
  constructor(){}

  addNote(note: Note){
    this.notes.push(note);
  }

  getCompletedNotes(){
    let arr=[];
    for(let note of this.notes){
      if("Completed" ===  note.status)
        arr.push(note);
    }

    return arr;
  }

  getActiveNotes(){
    let arr=[];
    for(let note of this.notes){
      if("Active" ===  note.status)
        arr.push(note);
    }

    return arr;
  }

  getAllNotes(){
    return this.notes;
  }

}
