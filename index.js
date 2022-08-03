const throwError = async () => {
  throw new Error('Something bad happened');
}

const fiveHundredError = async () => {
  return {
    statusCode: 500,
    body: JSON.stringify({
      message: 'sorry mom',
    }),
  };
};

const timeoutError = async () => {
  const wait = () => new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });

  await wait();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'How have you done this???',
    }),
  };
};

const success = async () => {
  console.log('Before message...');
  console.log('After message...');
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is a good thing!",
    }),
  };
};

const successJson = async () => {
  console.log(JSON.stringify({
    message: 'Hello there',
    another: {
      thing: 2,
      arr: [1,2,3,4],
      obj: {
        why: 'me?',
        arr: [
          {
            id: 1,
            another: 2,
            thing: 3,
          },
          {
            id: 2,
            another: 2,
            thing: 3,
            meta: {
              thing: 1,
            }
          }
        ]
      }
    }
  }, null, 2));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "This is a good thing!",
    }),
  };
}

module.exports = {
  success,
  throwError,
  fiveHundredError,
  timeoutError,
  successJson,
};
