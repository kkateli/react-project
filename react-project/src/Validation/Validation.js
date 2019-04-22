import App from "../App";

const validation = props => {
  if (props.len < 5) {
    let judge = <p>Too short!</p>;
  } else {
    judge = <p>Too long</p>;
  }

  return judge;
};
