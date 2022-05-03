import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import Current from "./current";
test("currently reading books",async()=>{
  await axios.get.mockResolvedValueOnce({
    books:[
      {
        "title":"Beyond Entrepreneurship 2.0",
        "author":"Bill Lazier"
      }
    ]
  })

  render(<Current/>)

  expect(axios.get).toHaveBeenCalledTimes(1)
  expect(axios.get).toHaveBeenCalledWith("http://localhost:8000/list")

})

// jest.mock('axios');

// describe('App', () => {
//   test('fetches stories from an API and displays them', async () => {
//     const books = 
//      [
//       {
//         "id": 1,
//         "image": "/assets/images/10.png",
//         "title": "Being Boss",
//         "author": "Kathleen Shannon and Emily",
//         "readtime": "13",
//         "reads": "",
//         "finished": false
//       },
//       {
//         "id": 2,
//         "image": "/assets/images/2.png",
//         "title": "Beyond Entrepreneurship",
//         "author": "Jim collins & Bill Lazier",
//         "readtime": "13",
//         "reads": "1.9k",
//         "finished": false
//       },
//       {
//         "id": 3,
//         "image": "/assets/images/11.png",
//         "title": "Employee to Entrepreneur",
//         "author": "Steve Glavesky",
//         "readtime": "13",
//         "reads": "1.9k",
//         "finished": false
//       },
//       {
//         "id": 4,
//         "image": "/assets/images/4.png",
//         "title": "The Fate of Food",
//         "author": "Amanda Little",
//         "readtime": "12",
//         "reads": "16k",
//         "finished": false
//       },
//       {
//         "id": 5,
//         "image": "/assets/images/5.png",
//         "title": "Lives of the Stoics",
//         "author": "Ryan Holiday,Stephen Hansel",
//         "readtime": "13",
//         "reads": "",
//         "finished": false
//       },
//       {
//         "id": 6,
//         "image": "/assets/images/6.png",
//         "title": "Loving Your Business",
//         "author": "Debbie King",
//         "readtime": "13",
//         "reads": "",
//         "finished": true
//       },
//       {
//         "id": 7,
//         "image": "/assets/images/7.png",
//         "title": "The Lonely Century",
//         "author": "Noreena Hertz",
//         "readtime": "15",
//         "reads": "",
//         "finished": false
//       },
//       {
//         "id": 8,
//         "image": "/assets/images/8.png",
//         "title": "Eat Better,Feel Better",
//         "author": "Giada Lee Laurensis",
//         "readtime": "13",
//         "reads": "1.9k",
//         "finished": false
//       },
//       {
//         "id": 9,
//         "image": "/assets/images/9.png",
//         "title": "Dropshipping",
//         "author": "James Moore",
//         "readtime": "12",
//         "reads": "",
//         "finished": false
//       },
//       {
//         "image": "/assets/images/10.png",
//         "title": "Being Boss",
//         "author": "Kathleen Shannon and Emily",
//         "readtime": "13",
//         "reads": "",
//         "id": 11,
//         "finished": true
//       }
//     ]

//     axios.get.mockImplementationOnce(() =>
//       Promise.resolve({ data: { list: books } })
//     );

//     render(<Current/>);

//     const items = await screen.findAllByRole('listitem');

//     expect(items).toHaveLength(10);
//   });
// });