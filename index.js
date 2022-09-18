const Button = (props) => {
  const { className, text } = props;
  return <button className={`button ${className}`}> {text}</button>;
};

const element = (
  <div className="bgContainer">
    <div className="container">
      <h1 className="heading"> Social Buttons</h1>
      <div className="btnContainer">
        <Button className="like" text="Like" />
        <Button className="comment" text="Comment" />
        <Button className="share" text="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
