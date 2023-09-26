const defaultStore = {
  currentPage: 1,
  isFirstPage: true,
  isLastPage: true,
};

const SET_PAGE = "SET_PAGE";
const INCRIMENT_PAGE = "INCRIMENT_PAGE";
const DECRIMENT_PAGE = "DECRIMENT_PAGE";

export const pageReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...store,
        currentPage: action.payload.page,
        isFirstPage: action.payload.page === 1 ? true : false,
        isLastPage:
          action.payload.page >= Math.ceil(action.payload.todosLength / 5),
      };
    case INCRIMENT_PAGE:
      return {
        ...store,
        currentPage: store.currentPage + 1,
        isLastPage: store.currentPage + 1 >= Math.ceil(action.payload / 5),
        isFirstPage: false,
      };
    case DECRIMENT_PAGE:
      return {
        ...store,
        currentPage: store.currentPage - 1,
        isFirstPage: store.currentPage - 1 === 1,
        isLastPage: false,
      };
    default:
      return store;
  }
};

export const setPageAction = (payload) => ({ type: SET_PAGE, payload });
export const nextPageAction = (payload) => ({ type: INCRIMENT_PAGE, payload });
export const previousPageAction = () => ({ type: DECRIMENT_PAGE });
