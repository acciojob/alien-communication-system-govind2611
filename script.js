
const sendMicrotask = (message) => {
  console.log(`Processing microtask: ${message}`);
};

const sendMacrotask = (message) => {
  console.log(`Processing macrotask: ${message}`);
};

const aliensCommunication = () => {
  console.log("Aliens are communicating!");

  Promise.resolve()
    .then(() => sendMicrotask("Microtask 1"));

  Promise.resolve()
    .then(() => sendMicrotask("Microtask 2"));


  setTimeout(() => sendMacrotask("Macrotask 1"), 0);

 
  setTimeout(() => sendMacrotask("Macrotask 2"), 0);

  console.log("Communication tasks sent!");
};

aliensCommunication();

console.log("Earth is processing tasks...");