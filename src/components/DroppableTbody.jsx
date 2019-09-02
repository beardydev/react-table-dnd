// Package includes
import React from 'react';
import { ReactTableDefaults } from 'react-table'; // Contains react-table components, i.e. Tr, Th components
import { Droppable } from 'react-beautiful-dnd'; // Wrapper for our Droppable Tbody

/**
 * TbodyComponent wrapped in droppable 
 * adapted from https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md
 */
const DroppableTbody = props => {
    return (
        <Droppable droppableId="course-builder">
            {(provided) => (
                <div ref={provided.innerRef}>
                    <ReactTableDefaults.TbodyComponent  >
                        {props.children}
                    </ReactTableDefaults.TbodyComponent>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default DroppableTbody;