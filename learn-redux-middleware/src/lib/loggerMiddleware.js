const middleware = store => next => action => {
    console.log('이전 상태', store.getState())
    console.log('액션', action)
    next(action)
    console.log('다음 상태', store.getState())
  };
  export default middleware