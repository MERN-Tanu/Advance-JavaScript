// it is used for performing optimisation
//  rate limit the fn call and fn execution
// when user press button again and again - onclick
/**
 * With Throttling function:
 With throttling, you limit(delay) the frequency of function invocations.
 For example, you might decide to execute a function at most once every 1500 milliseconds.
 This prevents the function from being called too frequently and helps maintain a smoother performance.
 * 
 */

//  Rough code of throttlig
/**
 * const expensive = () =>{
 * console.log("expensive");
 *
 * window.addEventListner("resize",expensive)
 *                           ("""""",betterexpensive)
 *
 * using throttling
 *
 * const betterExperience = throttling(expensive,limit)
 *                           ("""""",100)
 *
 *
 * }
 *
 */
// context = object
// args = array inside an array  : array = [1,2,3,4]

const throttling = (func, limit) => {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);

      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
      console.log(context);
    }
  };
};
