export const delay = time => {
    const prom = new Promise((resolve) => {
      setTimeout(() => {
        resolve(time)
    }, time)
    });

  return prom;
};
  
delay(3000)
.then(() => console.log('Done'));