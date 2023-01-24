import {
    TouchSensor,
  } from '@dnd-kit/core';

export class VibroTouchSensor extends TouchSensor {
    private handleStart() {
        super.handleStart();
        navigator.vibrate?.(50);
    }
}
