export const ADD_NEW_IDEA = 'ADD_NEW_IDEA';

const addNewIdea = idea => ({
  type: ADD_NEW_IDEA,
  payload: {
    idea,
  },
});

export default {
    addNewIdea,
};
