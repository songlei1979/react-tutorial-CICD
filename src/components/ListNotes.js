import React, {useEffect, useState} from 'react';
import axios from "axios";
import CreateNote from "./CreateNote";
import DetailNote from "./DetailNote";
import UpdateNote from "./UpdateNote";

function ListNotes(props) {
    const [notes, setNotes] = useState([])
    useEffect(() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost:8000/notes/notes/',
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setNotes(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [notes]);

    return (
        <div>
            <h1>Notes</h1>
            {notes.map(note => (
                <div key={note.id}>
                    <DetailNote note_id={note.id}/>
                    <UpdateNote note_id={note.id}/>
                </div>
            ))}

            <CreateNote/>
        </div>
    );
}

export default ListNotes;