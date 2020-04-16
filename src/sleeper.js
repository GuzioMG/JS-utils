//Extracted from: https://www.sitepoint.com/delay-sleep-pause-wait/

//WARNING!!! CALLING THIS FUNCTION IS VERY UNSAFE, AS IT BLOCKS THE THREAD AND MAY POTENTIALLY LEAD EVERYTHING TO CRASH!!!
//If you don't know you're doing, use an alternative method described at https://www.sitepoint.com/delay-sleep-pause-wait/ below this one.

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}