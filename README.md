# Noteful React

## Components Structure
* __Index.js__ (stateless)
    * __App.js__ (statefull) 
        * __MainNotes.js__ (stateless)
            * __Note.js__ (stateless)
        * __Sidebar.js__ (stateless)
        * __FolderNotes.js__ (stateless)
            * __Note.js__(stateless)
        * __dummy-store.js__ (stateless) 

        * __NoteSidebar.js__ (stateless)






            * __CircleButton.js__ (stateless) - gets the _"className"_  and the _"children"_ from the __MainSidebars.js__
        * __AddFolder.js__ (stateful) - gets the _"handleSubmit"_ and the _"handleChange"_call back prop from the __App.js__
        * __ShowNotesForFolder.js__ (stateless)  - gets the _"notes"_ from the __App.js__
            * __ShowOneNoteDetails.js__ (stateless) - gets the _"id"_ and the _"name"_  and _"modified"_ from the __ShowNotesForFolder.js__
        * __ShowOneNote.js__ (stateful) - gets the _"note"_ from the __ShowNotes.js__
            * __ShowOneNoteDetails.js__ (stateless) - gets the _"id"_ and the _"name"_  and _"modified"_ from the __ShowOneNote.js__
            * __CircleButton.js__ (stateless) - gets the _"className"_  and the _"children"_ from the __ShowOneNote.js__
        * __AddNote.js__ (stateful)  - gets the _"handleSubmit"_ and the _"handleChange"_call back prop from the __App.js__
        * __dummy-store.js__ (stateless) 
            