const newStatus = function() {
  return {
    id: null,
    online: false,
    at: "",
    liked: {
      state: false,
      nber: 0,
    },
    author: {
      name: 'Planck Anders',
      foto: 'https://images.unsplash.com/photo-1523380360198-653413ad178b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHZpb2xldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
    },
    tags: [],
    images: [],
    comments: [],
  }
}


export {newStatus}