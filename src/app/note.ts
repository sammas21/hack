export class Note{
    id: number;
    title: string='';
    status: string='';

    constructor(values: Object={}){
        Object.assign(this,values);
    }
}