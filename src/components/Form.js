function Form() {
  return (
    <div className="container">
      <form>
        <h1>Registration form</h1>
        <div className="ui divider">
          <div className="uiform">
            <div className="field">
            <label>username</label>
            <input type="text" name="username" placeholder="username"/>
            <label>email</label>
            <input type="text" name="email" placeholder="email"/>
            <label>password</label>
            <input type="text" name="email" placeholder="email"/>
            </div>
          </div>
        </div>
        
      </form>
    </div>
  );
}
