import { useState } from 'react';
import './FormInput.scoped.css';
import {
  NameSaver,
  Request
} from '../../helpers/helpers'

function FormInput(props) {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function clearAll() {
    const req = new Request()
    req.endpoint = 'names/clearAll'
    req.callback = () => props.onClear()
    req.run()
  }

  function saveNameInput() {
    const saver = new NameSaver()
    saver.firstName = firstName
    saver.lastName = lastName
    saver.callback = (res) => {
      setFirstName('')
      setLastName('')
      props.onSuccess(res)
    }
    saver.save()
  }

  return (
    <div className="input-white">
      <div className="row pad-sides">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                placeholder="First Name"
                type="text"
                className="validate"
                onKeyUp={(event) => setFirstName(event.target.value)} />
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                placeholder="Last Name"
                type="text"
                className="validate"
                onKeyUp={(event) => setLastName(event.target.value)} />
            </div>
          </div>
          <div className="row">
            <button
              className="waves-effect waves-light btn red button-space"
              onClick={() => clearAll()}>Clear All</button>
            <button
              className="waves-effect waves-light btn button-space"
              onClick={() => saveNameInput()}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default FormInput;
