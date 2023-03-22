import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner',
      price: 500,
      photos: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      checkinTime: new Date('21-Mar-2023'),
      checkoutTime: new Date('22-Mar-2023'),
    },
    {
      roomNumber: 2,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, TV, Wifi',
      price: 1000,
      photos: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      checkinTime: new Date('23-Mar-2023'),
      checkoutTime: new Date('24-Mar-2023'),
    }
]

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

}
