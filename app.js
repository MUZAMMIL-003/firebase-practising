import { db, collection, addDoc, getDocs } from "./firebase.js";

let fun = async () => {
  let todos = document.getElementById("todos");
  try {
    const docRef = await addDoc(collection(db, "item"), {
      todos: todos.value,
    });
    console.log("Document written with ID: ", docRef.id);
    console.log("ADDED");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  todos.value = "";
};
let readFun = async () => {
  const querySnapshot = await getDocs(collection(db, "item"));
  querySnapshot.forEach((doc) => {
    let {todos}= doc.data()
    // console.log(`${doc.id} => ${doc.data()}`);
    var one = `<div id = "${doc.id}">${todos}</div>`
    miniDiv.innerHTML += one;
    // console.log( doc.data())
  });
};
readFun();

let bttn = document.getElementById("buttton");
bttn.addEventListener("click", fun);

let miniDiv =document.getElementById("miniDiv")
