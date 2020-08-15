import bg from 'assets/images/bg1.png';

const initialState = {
  projects: [
    {
      name: 'idoxeadnails',
      img: bg,
      shordDescription: 'Strona do wstawiania paznokci',
      description:
        'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
    },
    {
      name: 'idoxedasdnails',
      img: bg,
      shordDescription: 'Strona do wstawiania paznokci',
      description:
        'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
    },
    {
      name: 'idoxedanails',
      img: bg,
      shordDescription: 'Strona do wstawiania paznokci',
      description:
        'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
    },
    {
      name: 'kocham idzie',
      img: bg,
      shordDescription: 'Strona do wstawiania paznokci',
      description:
        'Strona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokciStrona do wstawiania paznokci',
    },
  ],
  error: null,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD NEW PROJECT': {
      return {
        ...state,
        error: 'added project',
      };
    }
    case 'DELETE PROJECT': {
      return {
        ...state,
        error: null,
      };
    }
    case 'ADD NEW PROJECT ERROR': {
      console.log(action.err);
      return {
        ...state,
        error: 'add project error',
      };
    }
    case 'DELETE PROJECT ERROR': {
      return {
        ...state,
        error: 'delete project error',
      };
    }
    case 'ADD FILE': {
      return {
        ...state,
        error: null,
      };
    }
    case 'ADD FILE ERROR': {
      return {
        ...state,
        error: 'add file error',
      };
    }
    default:
      return state;
  }
};

export default projectsReducer;
