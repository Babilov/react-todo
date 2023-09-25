const defaultStore = {
  currentPage: 1,
  isFirstPage: true,
  isLastPage: true,
};

const GET_PAGE = "GET_PAGE";
const INCRIMENT_PAGE = "INCRIMENT_PAGE";
const DECRIMENT_PAGE = "DECRIMENT_PAGE";
const SET_FIRST_PAGE = "SET_FIRST_PAGE";
const SET_LAST_PAGE = "SET_LAST_PAGE";

export const pageReducer = (store = defaultStore, action) => {
  switch (action.type) {
    case INCRIMENT_PAGE:
      return { ...store, currentPage: store.currentPage + 1 };
    case DECRIMENT_PAGE:
      if (store.currentPage - 1 !== 0) {
        return { ...store, currentPage: store.currentPage - 1 };
      } else {
        return { ...store };
      }
    case SET_FIRST_PAGE:
      if (store.currentPage === 1) return { ...store, isFirstPage: true };
      else return { ...store, isFirstPage: false };

    case SET_LAST_PAGE:
      if (store.currentPage >= Math.ceil((action.payload + 1) / 5))
        return { ...store, isLastPage: true };
      else return { ...store, isLastPage: false };

    default:
      return store;
  }
};

export const getPageAction = () => ({ type: GET_PAGE });
export const nextPageAction = () => ({ type: INCRIMENT_PAGE });
export const previousPageAction = () => ({ type: DECRIMENT_PAGE });
export const setFirstPageAction = () => ({ type: SET_FIRST_PAGE });
export const setLastPageAction = (payload) => ({
  type: SET_LAST_PAGE,
  payload,
});
