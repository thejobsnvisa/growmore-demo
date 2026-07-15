// src/components/VoiceWidget.jsx
import React from 'react';
// 1. Make sure you import it correctly from your PageTracker file
import { trackWidgetEvent } from '../PageTracker'; 

function VoiceWidget() {
  return (
    <div className="voice-agent-container">
      {/* WRONG (Fires on render, not on click): */}
      {/* <button onClick={trackWidgetEvent("Clicked Open")}>Open</button> */}

      {/* CORRECT (Only fires when clicked): */}
      <button onClick={() => trackWidgetEvent("Voice Widget: Opened")}>
        Open Agent
      </button>

      <button onClick={() => trackWidgetEvent("Voice Widget: Mic Activated")}>
        🎤 Speak
      </button>
    </div>
  );
}

export default VoiceWidget;