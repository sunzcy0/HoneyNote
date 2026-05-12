

/* Note Object */
const Note = {
  id: String,
  title: String,
  description: String,
  content: String,
  createdAt: Date,
  updatedAt: Date,
  favorite: Boolean,
} 

export const notesArray = [
  {
    id: '1',
    title: 'Note 1',
    description: 'Description 1',
    content: 'Content 1',
    createdAt: new Date(),
    updatedAt: new Date(),
    favorite: false,
  },
  {
    id: '2',
    title: 'Note 2',
    description: 'Description 2',
    content: 'Content 2',
    createdAt: new Date(),
    updatedAt: new Date(),
    favorite: false,
  },
  {
    id: '3',
    title: 'Note 3',
    description: 'Description 3',
    content: 'Content 3',
    createdAt: new Date(),
    updatedAt: new Date(),
    favorite: false,
  },
]
