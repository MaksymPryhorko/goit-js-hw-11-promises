//Подзадание 1

//Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса должно быть то кол-во миллисекунд которое передали во время вызова функции delay.

const delay = ms => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms);
    },ms);
  });
};

const logger = time => console.log(`Fulfilled after ${time}ms`);

// Tests
delay(2000).then(logger); // Fulfilled after 2000ms
delay(1000).then(logger); // Fulfilled after 1000ms
delay(1500).then(logger); // Fulfilled after 1500ms








// Подзадание 2

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию, а принимала всего два параметра allUsers и username и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: false },
];

const toggleUserState = (allUsers, username) => {
  return new Promise((resolve) => {
    resolve(allUsers.map(user =>
      user.name === username ? { ...user, active: !user.active } : user
    ));
  });
};

// Currently the function works like this
toggleUserState(users, 'Mango', console.table);
toggleUserState(users, 'Ajax', console.table);

// The function should work like this
toggleUserState(users, 'Mango').then(console.table);
toggleUserState(users, 'Ajax').then(console.table);











// Подзадание 3


// Перепиши функцию makeTransaction() так, чтобы она не использовала callback-функции onSuccess и onError, а принимала всего один параметр transaction и возвращала промис.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};


makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);
makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

