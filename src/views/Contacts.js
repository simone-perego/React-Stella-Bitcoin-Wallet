import "../App.css";

let email, pass, Messaggio;

function nameChanged(e) {
  console.log(e.target.value);
}
function emailChanged(e) {
  console.log(e.target.value);
}
function message(e) {
  console.log(e.target.value);
}

function Contacts() {
  return (
    <div className="container">
      <div className="title">
        <h1>CONTACT US</h1>
      </div>
      <div className="contact">
        <form>
          <div className="form-group">
            <label>Nome</label>
            <input type="text" className="form-control" onBlur={nameChanged} />
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="text" className="form-control" placeholder="E-mail" onBlur={emailChanged}></input>
          </div>
          <div className="form-group">
            <label>Messaggio</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onBlur={message}></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

console.log();

export default Contacts;
