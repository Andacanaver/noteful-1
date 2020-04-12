import React from 'react';

export default function NoteSidebar(props) {
    return (
        <div className='NoteSidebar'>
            <button 
                type='button'
                onClick={() => props.history.goBack()}>Go Back
            </button>
            {props.folder && (
                <h3 className='NoteSidebar__folder'>
                    {props.folder.name}
                </h3>
            )}
        </div>
    )
}

NoteSidebar.defaultProps = {
    history: {
        goBack: () => {}
    }
}