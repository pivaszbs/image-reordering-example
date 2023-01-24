import React from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import { Image } from './components/Image';

export function SortableItem(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  
  return (
    <div style={{ touchAction: 'none', ...style }} ref={setNodeRef} {...attributes} {...listeners}>
      <Image count={props.count} />
    </div>
  );
}
