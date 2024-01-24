import React from 'react';
import '../styles/ContactPage.css'
import { Prompt } from 'react-router-dom';
class ContactPage extends React.Component {
    state = {
        value: "",
    }

    handleClick = (e) => {
        e.preventDefault()
        this.setState({
            value: "",
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div className="contact">
                <form onClick={this.handleClick}>
                    <h3>Napisz do nas</h3>
                    <textarea placeholder="Napisz tutaj wiadomość" value={this.state.value}
                        onChange={this.handleChange}></textarea>
                    <button onClick={this.handleClick}>Wyslij</button>

                </form>

                {/* <Prompt
                    when={true}
                    message="Masz niewypelniony formular. CVzy na prewno chesz opusici tę strone?" /> */}

            </div>
        )
    }
}

export default ContactPage;
