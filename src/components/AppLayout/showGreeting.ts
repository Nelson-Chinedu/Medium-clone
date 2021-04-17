export const showGreeting = () => {
  let greeting;
  const time = new Date();
  const showHours = time.getHours();
  if (showHours < 12) {
    greeting = 'Good morning';
  } else if (showHours <= 18 && showHours >= 12) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  return greeting;
};
