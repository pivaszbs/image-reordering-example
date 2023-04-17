import React, { useState } from "react";
import { rectSortingStrategy } from "@dnd-kit/sortable";
import { restrictToFirstScrollableAncestor } from "@dnd-kit/modifiers";
import "./App.css";
import { GridContainer, Image } from "./components";
import { createRange } from "./createRange";

import { Sortable } from "./Sortable";

const props = {
  adjustScale: true,
  Container: (props: any) => <GridContainer {...props} columns={2} />,
  strategy: rectSortingStrategy,
  wrapperStyle: () => ({
    width: 200,
    height: 200,
  }),
};

const initialItems = createRange<{ id: number; value: string }>(
  16,
  (index) => ({
    id: index,
    index,
    value: `https://picsum.photos/id/${index}/200/200`,
  })
);

function App() {
  return (
    <Sortable
      {...props}
      getItemStyles={({ isDragging, isDragOverlay }) => {
        return {
          opacity: isDragging && !isDragOverlay ? 0.3 : 1,
        };
      }}
      modifiers={[restrictToFirstScrollableAncestor]}
      activationConstraint={{ delay: 100, tolerance: 5 }}
      items={initialItems}
      renderItem={({ value }) => <Image src={value} />}
    />
  );
}

export default App;
