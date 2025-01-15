import { db, collection, addDoc, getDocs,  doc, } from "./firebase.js";

let addFun = async () => {
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
  location.reload();
};
let readFun = async () => {
  const querySnapshot = await getDocs(collection(db, "item"));
  querySnapshot.forEach((doc) => {
    let {todos}= doc.data()
    // console.log(`${doc.id} => ${doc.data()}`);
    var one = `<div id = "${doc.id}">${todos}
     <input type="submit" id="delete" value ="DELETE">
    </div>`
    miniDiv.innerHTML += one;
    // console.log( doc.data())
  });
};
readFun();

let bttn = document.getElementById("buttton");
bttn.addEventListener("click", addFun);

let miniDiv =document.getElementById("miniDiv")

 let dltBttn = document.getElementById("delete")
 dltBttn.addEventListener("click", dltFun);

 let dltFun =  async () => {
    await deleteDoc(doc(db, "cities", "DC"));

 }