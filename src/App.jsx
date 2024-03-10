import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'

function App() {
    let [inputs, setInputs] = useState({
        email: '',
        number: '',
        state: false,
    })
    // ----------------------------------
    // check field
    let checkState = { email: false, number: false }
    if (inputs.email.length > 2) {
        // length email to pass
        checkState = { ...checkState, email: true }
    }
    if (inputs.number.length > 2) {
        // length number to pass
        checkState = { ...checkState, number: true }
    }
    let color = ''
    function getMessage() {
        let message = ''
        if (!checkState.email) {
            message = 'Enter A Correct Email'
            color = 'bg-danger-600'
        }
        if (!checkState.number) {
            message = 'Enter A Correct Number'
            color = 'bg-danger-600'
        }
        if (!checkState.email && !checkState.number) {
            message = 'Enter A Correct Email & Number'
            color = 'bg-danger-600'
        }
        if (checkState.email && checkState.number) {
            message = 'success'
            color = 'bg-success-400'
        }
        return message
    }
    // ------------------------------------
    function check() {
        // check field to (enable/disable) submit button
        if (inputs.email && inputs.number && inputs.state) {
            return true
        } else {
            return false
        }
    }
    let [submit, setSubmit] = useState(false)
    return (
        <div className="flex h-screen w-full items-center justify-center bg-slate-800 text-slate-300">
            <form
                className="flex flex-col items-center justify-center gap-3 rounded-sm bg-fuchsia-800 p-7"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    placeholder="Email ..."
                    className="input"
                    value={inputs.email}
                    onChange={(e) => {
                        setInputs({ ...inputs, email: e.target.value })
                    }}
                />
                <input
                    type="text"
                    placeholder="Phone Number ..."
                    className="input"
                    value={inputs.number}
                    onChange={(e) => {
                        setInputs({ ...inputs, number: e.target.value })
                    }}
                />
                <label htmlFor="checkStudent">Are You study:</label>
                <input
                    type="checkbox"
                    id="checkStudent"
                    className=" size-6 cursor-pointer"
                    value={false}
                    onChange={(e) => {
                        setInputs({ ...inputs, state: e.target.checked })
                    }}
                />
                <input
                    type="submit"
                    placeholder="Submit"
                    disabled={!check()}
                    onClick={() => {
                        setSubmit((e) => !e)
                        // setInputs({...inputs, email:"",number:"",state:false})
                    }}
                    className=" cursor-pointer rounded-md border-2 border-white px-7 py-2 text-3xl transition duration-300 hover:border-none hover:bg-success-600 hover:text-white disabled:cursor-not-allowed disabled:border-none disabled:bg-slate-600 disabled:text-inherit"
                />
                {submit ? (
                    <Alert
                        myCheck={getMessage()}
                        color={color}
                        trigger={submit}
                        setTrigger={setSubmit}
                    />
                ) : null}
            </form>
        </div>
    )
}

export default App
