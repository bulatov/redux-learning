export const CHANGE_TREATMENT = 'CHANGE_TREATMENT';
export const CHANGE_STATUS = 'CHANGE_STATUS';


export const changeTreatment = (text, id) => {
  return {
    type: CHANGE_TREATMENT,
    text: text,
    id: id
  };
};

export const changeStatus = (text, id) => {
  return {
    type: CHANGE_STATUS,
    text: text,
    id: id
  };
};
