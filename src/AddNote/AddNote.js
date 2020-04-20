//POST method to post a new note into the MainNotes component
//Put the new note into an existing folder

import React from 'react'
import NotesContext from '../NotesContext'

export default class AddNote extends React.Component {
    static contextType = NotesContext

    state = {
        name: '',
        folderId: '',
        content: '',
    }

    updateFolderId(folderId) {
        this.setState({ folderId: { value: folderId, touched: true } })
    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value.trim() });
        console.log(this.state)
    }

    handleSubmit(e) {
        console.log(this.context.addNote);
        e.preventDefault();
        const { name, folderId, content } = e.target;
        const note = {
            name: name.value,
            folderId: folderId.value,
            content: content.value
        };

        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'content-type': 'application-json'
            }
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(error => {
                    throw error;
                });
            } return res.json();
        })
        .then(data => {
            name.value = '';
            content.value = '';
            folderId.value = '';
            this.context.addNote(data);
            this.setState({ data });
            this.props.history.push('/', data);
        })
    }

    //notes are not being named or going into any specific folder
    //this.context.addNote(data) is NOT working, which is why there is not data in the notes

    render() {
        const folders = this.context.folders

        return (
            <div>
                <form 
                    onSubmit={e => this.handleSubmit(e)}
                >
                    <legend><h2>Add Note</h2></legend>
                    <label
                        htmlFor='name'
                    ><h4>Note Name</h4>
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        defaultValue=''
                        onChange={this.handleChange}
                    />

                    <label
                        htmlFor='content'
                    ><h4>Note Content</h4>
                    </label>
                    <input
                        type='text'
                        name='content'
                        id='content'
                        defaultValue=''
                        onChange={this.handleChange}
                    /> 
                    <br />

                    <select
                        id='folderId'
                        name='folderId'
                        value={this.state.folderId}
                        onChange={this.handleChange}
                    >
                    <option>Select a folder</option>
                        {folders.map(folder => (<option key={folder.id} value={folder.id}>{folder.name}</option>))}
                    </select>
                    <br />
                    <button
                        type='submit'
                        id='submit-btn'
                    >
                    Submit
                    </button>
                </form>

            {/* <button 
                className='goBack__button'
                type='button'
                onClick={() => props.history.goBack()}>Go Back
            </button> */}

            </div>
        )
    }
}

AddNote.defaultProps = {
    name: '',
    history: {
        goBack: () => {}
    }
}