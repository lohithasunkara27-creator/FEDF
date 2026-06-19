import { useState } from "react";
import Navbar from "../components/Navbar";
import BoardCard from "../components/BoardCard";
import "../styles/Wishlist.css";

function Wishlist(){

 const user = JSON.parse(
   localStorage.getItem("currentUser")
 );

 if(!user){
  return (
   <>
    <Navbar/>
    <h2 style={{padding:"40px"}}>
     Login to view Wishboards ❤️
    </h2>
   </>
  );
 }


 function getBoards(){
  const data =
   JSON.parse(localStorage.getItem("wishboards"))
   || {};

  return data[user.email] || [];
 }


 function storeBoards(updated){
  const data =
   JSON.parse(localStorage.getItem("wishboards"))
   || {};

  data[user.email] = updated;

  localStorage.setItem(
   "wishboards",
   JSON.stringify(data)
  );

  setBoards(updated);
 }


 const [boards,setBoards] =
 useState(getBoards());


 function createBoard(){

  const name = prompt(
   "Board name?"
  );

  if(!name) return;

  const newBoard={
   id:Date.now(),
   name,
   products:[]
  };


  storeBoards([
   ...boards,
   newBoard
  ]);
 }



 function renameBoard(id){

 const name =
 prompt("New board name");

 if(!name) return;


 storeBoards(
  boards.map(board =>
   board.id === id
   ? {...board,name}
   : board
  )
 );

 }


 function deleteBoard(id){

 if(!window.confirm(
  "Delete board?"
 )) return;


 storeBoards(
 boards.filter(
 board => board.id !== id
 )
 );

 }


 return(
 <>
 <Navbar/>

 <div className="wishlist-page">

 <h1>
 My Wishboards ❤️
 </h1>


 <button
 className="create-btn"
 onClick={createBoard}
 >
 + Create Board
 </button>


 <div className="boards-grid">

 {
 boards.length===0
 ?
 <p>
 No boards yet.
 Create your first one!
 </p>

 :
 boards.map(board => (
 <BoardCard
 key={board.id}
 board={board}
 renameBoard={renameBoard}
 deleteBoard={deleteBoard}
 />
 ))
 }

 </div>

 </div>

 </>
 );

}


export default Wishlist;