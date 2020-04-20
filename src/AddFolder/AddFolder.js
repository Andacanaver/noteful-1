//POST method to post a new folder to the server - into the Sidebar component

import React from 'react';
import NotesContext from '../NotesContext';

export default class AddFolder extends React.Component {
    static contextType = NotesContext

    state = {
        name: '',
        error: null,
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value.trim() });
        console.log(this.state)
    }

    //becomes a GET request for some reason - trying to figure out why
    //now need to make it show up on the page
    handleSubmit = (e) => {
        console.log(name.value);
        e.preventDefault();
        const { name } = e.target;
        const folder = {
            folderName: name.value
        };

        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            body: JSON.stringify(folder),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => {
            if (!res.ok) {
                return res.json().then(error => {
                    throw error;
                });
            }
            return res.json();
        })
        .then(data => {
            name.value= '';
            this.context.addFolder(data);
            this.props.history.push('/');
        })
        .catch(error => {
            this.setState({ error: error });
        })
    }

    render() {
        return(
            <div className='add-folder'>
                
                <form className='add-folder-form' onSubmit={e => this.handleSubmit(e)}>
                    <legend><h2>Add Folder</h2></legend>
                    <label htmlFor='name'>Folder Name</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={this.handleChange}
                    />
                    <button
                        type='submit'
                        id='submit-button'
                        //disabled={this.state.formValid === false}
                    > Submit
                    </button>    
                </form>
            </div>
        )
    }
}

AddFolder.defaultProps = {
    name: '',
    history: {
        goBack: () => {}
    }
}