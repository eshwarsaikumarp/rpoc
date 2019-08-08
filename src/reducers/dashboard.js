const initialState = {
  people: {},
  movies: {},
  navbar: []
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case "PEOPLE":
      return { ...state, people: action.payload };
    case "MOVIES":
      return { ...state, movies: action.payload };
    case "NAVBAR_DATA":
      return { ...state, navbar: action.payload };
    default:
      return { ...state };
  }
};

export default dashboard;
