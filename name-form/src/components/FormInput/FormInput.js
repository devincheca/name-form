import { useState } from 'react';
import './FormInput.scoped.css';
import NameSaver from '../../helpers/NameSaver'

function FormInput(props) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function saveNameInput() {
    const saver = new NameSaver()
    saver.firstName = firstName
    saver.lastName = lastName
    saver.callback = (res) => props.onSuccess(res)
    saver.save()
  }

  return (
    <div className="input-white">
      <div className="row pad-sides">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input id="first_name" placeholder="First Name" type="text" className="validate" onKeyUp={(event) => setFirstName(event.target.value)} />
            </div>
            <div className="input-field col s6">
              <input id="last_name" placeholder="Last Name" type="text" className="validate" onKeyUp={(event) => setLastName(event.target.value)} />
            </div>
          </div>
          <div className="row">
            <button className="waves-effect waves-light btn" onClick={() => saveNameInput()}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default FormInput;
