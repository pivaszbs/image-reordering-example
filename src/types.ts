import { DraggableSyntheticListeners, UniqueIdentifier } from "@dnd-kit/core";
import { Transform } from "@dnd-kit/utilities";

export type RenderItem<T> = (args: {
    dragOverlay: boolean;
    dragging: boolean;
    sorting: boolean;
    index: number;
    fadeIn: boolean;
    listeners: DraggableSyntheticListeners;
    ref: React.Ref<HTMLElement>;
    style: React.CSSProperties | undefined;
    transform?: Transform | null;
    transition?: string | null;
    value: T;
    id: UniqueIdentifier;
}) => React.ReactElement;


