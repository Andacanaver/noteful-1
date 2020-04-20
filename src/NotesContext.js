import React from 'react'

const NotesContext = React.createContext({
    notes: [],
    folders: [],
    deleteNote: () => {},
    addNote: () => {},
    addFolder: () => {},

})

export default NotesContext