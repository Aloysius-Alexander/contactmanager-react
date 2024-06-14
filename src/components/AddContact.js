import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
    };
    render() {
        return (
            <div className="ui main">
                <br></br>
                <h2 className="headertexttwo">Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter the name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}
                        />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter the mail id"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />
                    </div>
                    
                    <div style={{ display: 'grid', placeItems: 'center', height: '10vh'}}>
                        <button className="ui button green enlarged-button">ADD</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;