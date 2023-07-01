import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; // 예약어 -> Card 내부에 있는 child props를 불러옴
}

export default Card;
