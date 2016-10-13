function dayReducer (state = '9:00', action) {
  switch (action.type)  {

    case '9:00-10:00':
      return 'codewars or try the Artists section of Juke part 2';
    case '10:00 - 11:00':
      return 'React-router lecture';
    case '11:00 - 1:00pm':
      return 'React-Router workshop';
    case '1:00pm - 2:30':
      return 'LUNCH!!!';
    case '2:30 - 5:30':
      return 'React-Router workshop';
    case '5:30 - 6:30':
      return 'React-router review';
    default: return state;
  }
}