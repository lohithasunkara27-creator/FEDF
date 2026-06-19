import { useNavigate } from "react-router-dom";
import "../styles/BoardCard.css";
import products from "../data/products";

function BoardCard({
 board,
 renameBoard,
 deleteBoard
}) {

const navigate = useNavigate();
const coverProduct =
 products.find(
  p =>
  p.id === board.products[0]
 );


return (

<div className="board-card">


<div
 className="board-click"
 onClick={() =>
  navigate(`/board/${board.id}`)
 }
>
{
 coverProduct ?

 <img
  src={coverProduct.image}
  alt={board.name}
  className="board-cover"
 />

 :

 <div className="empty-cover">

 📌

 </div>

}

<h2>
 {board.name}
</h2>


<p>
 ❤️ {board.products.length}
 saved items
</p>


</div>


<div className="board-buttons">


<button
 onClick={() =>
 renameBoard(board.id)
 }
>
✏ Edit
</button>


<button
 onClick={() =>
 deleteBoard(board.id)
 }
>
🗑 Delete
</button>


</div>


</div>

);

}


export default BoardCard;