import { useState } from 'react';
import './FormInput.scoped.css';
// import NameSaver from '../../helpers/NameSaver'

function FormInput() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function saveNameInput() {
    console.log(firstName);
    console.log(lastName);
  /*
    const saver = new NameSaver()
    saver.firstName = firstName
    saver.lastName = lastName
    const res = await saver.save()
    console.log(res)
  */
  }

  return (
    <div className="input-white">
      <div className="row pad-sides">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" type="text" className="validate" onKeyUp={(event) => setFirstName(event.target.value)} />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate" onKeyUp={(event) => setLastName(event.target.value)} />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn" onClick={() => saveNameInput()}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );

}

export default FormInput;
