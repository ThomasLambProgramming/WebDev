
import "./Card.css";

function Card(props) {
  
    //classname will just add anything else onto the component so
  //then we can make this function a wrapper to contain stuff without
  //needing to write any doubles of css code and etc.
  const classes = "card " + props.className;
  //Props.children is anything inbetween the react component
  return <div className={classes}>{props.children}</div>;
}

export default Card;
