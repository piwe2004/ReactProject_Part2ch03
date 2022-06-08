import React, {useRef} from "react";

function SortableListItem({index, draggable, children, onDragStart, onDropItem, onClickItem}) {
    const itemRef = useRef(null);
    const onDragStartItem = () =>{
        itemRef.current.classList.add('dragstart')
        onDragStart(index)
    }
    const ondragEnd = () => itemRef.current.classList.remove('dragstart');
    const ondragEnter = () => itemRef.current.classList.add('dragover');
    const onDragLeave = () => itemRef.current.classList.remove('dragover');
    const onDropOver = (e) => e.preventDefault();
    const onDrop = () => {
        itemRef.current.classList.remove('dragover');
        onDropItem(index);
    }

    const onclick = () => onClickItem(index);

    return(
        <li
            ref={itemRef}
            className="item"
            draggable={draggable ? draggable : false}
            onDragStart={onDragStartItem}
            onDragEnd={ondragEnd}
            onDragEnter={ondragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDropOver}
            onDrop={onDrop}
            onClick={onclick}
        >
            {children}
        </li>
    )
}

export default SortableListItem
