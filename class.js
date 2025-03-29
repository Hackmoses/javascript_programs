export default class ClassRoom {
    constructor(maxStudentsSize) {
        this._maxStudentsSize = maxStudentsSize;
    }
}


const myClassRoom = new ClassRoom(30);
console.log(myClassRoom); // ClassRoom { _maxStudentsSize: 30 }