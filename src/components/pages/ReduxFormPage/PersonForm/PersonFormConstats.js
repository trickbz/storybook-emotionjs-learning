import { required, validateForm } from 'redux-form-validators';

export const PERSON_FORM_FIELDS = {
  NAME: 'name',
  SURNAME: 'surname'
};

export const PERSON_FORM_KEY = 'person';

export const PERSON_FORM_CONFIG = {
  form: PERSON_FORM_KEY,
  initialValues: {
    [PERSON_FORM_FIELDS.NAME]: 'Aleksey',
    [PERSON_FORM_FIELDS.SURNAME]: 'Petrenko',
  },
  validate: validateForm({
    [PERSON_FORM_FIELDS.NAME]: [
      required({ msg: 'Name is required' })
    ],
    [PERSON_FORM_FIELDS.SURNAME]: [
      required({ msg: 'Surname is required' })
    ]
  })
};
