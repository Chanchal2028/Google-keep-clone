import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';

const Notes = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(props.title);
  const [updatedContent, setUpdatedContent] = useState(props.content);

  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  const editIcon = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedNote = {
      title: updatedTitle,
      content: updatedContent,
    };
    props.updateItem(props.id, updatedNote);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}/>
          <textarea
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}></textarea>
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button className="btn" onClick={editIcon}>
            <EditIcon className="editIcon" />
          </button>
          <button className="btn" onClick={deleteNote}>
            <DeleteIcon className="deleteIcon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Notes;
