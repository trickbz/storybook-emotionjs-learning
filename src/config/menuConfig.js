import { 
  USE_CALLBACK_ROUTE, 
  USE_LAYOUT_EFFECT_ROUTE, 
  THEMING_ROUTE, 
  HOME_ROUTE, 
  REDUX_FORM_ROUTE, 
  STYLING_PAGE_ROUTE 
} from "./../constants/routerConstants";

export default [
  {
    label: 'Home',
    route: HOME_ROUTE
  },
  {
    label: 'Theming',
    route: THEMING_ROUTE
  },
  {
    label: 'Use Callback hook',
    route: USE_CALLBACK_ROUTE
  },
  {
    label: 'Use Layout Effect hook',
    route: USE_LAYOUT_EFFECT_ROUTE
  },
  {
    label: 'ReduxForm page',
    route: REDUX_FORM_ROUTE
  },
  {
    label: 'Styling page',
    route: STYLING_PAGE_ROUTE
  },    
];
