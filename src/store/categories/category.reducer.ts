import {Category } from "./category.types";
import {fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from "./category.action";
import { AnyAction } from "redux-saga";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error : Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoriesState => {

  if(fetchCategoriesStart.match(action)){
    return {...state, isLoading: true};
  }

  if(fetchCategoriesSuccess.match(action)){
    return {...state, categories: action.payload, isLoading: false}
  }

  if(fetchCategoriesFailed.match(action)){
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;

  // switch (action.type) {
  //   case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START:
  //     return { ...state, isLoading: true };
  //   case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
  //     return { ...state, isLoading: false, categories: action.payload };

  //   case CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
  //     return { ...state, isLoading: false, error: action.payload };

  //   default:
  //     return state;
  // }
};
