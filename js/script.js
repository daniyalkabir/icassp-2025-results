

// Target texts - EXTRACTED FROM YOUR RESEARCH TABLE
const targetTexts = [
    "yes",
    "open the door",
    "call emergency services ",
    "the quick brown fox jumped over the lazy dog",
    "shhh she sees the sea fish",
    "do go big bag dig",
    "two tall teachers talk to tim",
    "i whisper while walking wildly",
    "pack my box with five dozen liquor jugs",
    "glib jocks quiz nymph to vex dwarf",
    "a mad boxer shot a quick gloved jab to the jaw of his dizzy opponent",
    "just before twilight the wizard quickly jabbed five boxes of hazy quartz to vex a plump knights jovial frog",
    "twelve jolly grizzlies briskly danced over waxy benches while a fidgety vixen kept humming jazz tunes in the background",
    "quantum driven flux engines jam beneath zigzagging vortex panels as cryptic bioforms whisper behind polymorphic glass domes",
    "while whispering winds wander westward jittery jackals juggle velvet jars beyond flickering bonfires in a frozen jungle",
    "kindly expedite bizarre frozen jumpsuits for victors whirlwind gala to maximize xenon emissions before daybreak"

];

// Transcriptions - REPLACE THESE WITH YOUR ACTUAL TRANSCRIPTIONS
// originalTranscriptions[i] = what the original audio was transcribed as
// adversarialTranscriptions[i] = what the adversarial audio was transcribed as
const originalTranscriptions = [
    "REPLACE WITH ACTUAL  TRANSCRIPTION 1",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 2",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 3",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 4",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 5",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 6",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 7",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 8",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 9",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 10",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 11",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 12",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 13",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 14",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 15",
    "REPLACE WITH ACTUAL  TRANSCRIPTION 16"
];

const adversarialTranscriptions = [
    "yes",
    "open the door",
    "call emergency services ",
    "the quick brown fox jumped over the lazy dog",
    "shhh she sees the sea fish",
    "do go big bag dig",
    "two tall teachers talk to tim",
    "i whisper while walking wildly",
    "pack my box with five dozen liquor jugs",
    "glib jocks quiz nymph to vex dwarf",
    "a mad boxer shot a quick gloved jab to the jaw of his dizzy opponent",
    "just before twilight the wizard quickly jabbed five boxes of hazy quartz to vex a plump knights jovial frog",
    "twelve jolly grizzlies briskly danced over waxy benches while a fidgety vixen kept humming jazz tunes in the background",
    "quantum driven flux engines jam beneath zigzagging vortex panels as cryptic bioforms whisper behind polymorphic glass domes",
    "while whispering winds wander westward jittery jackals juggle velvet jars beyond flickering bonfires in a frozen jungle",
    "kindly expedite bizarre frozen jumpsuits for victors whirlwind gala to maximize xenon emissions before daybreak"

];

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Load content for the section
    loadSectionContent(sectionId);
}

function loadSectionContent(sectionId) {
    const grids = {
        'ecapa': 'ecapa-grid',
        'resnet': 'resnet-grid',
        'comparison': 'scatter-grid',
        'audio': 'audio-grid'
    };
    
    const gridId = grids[sectionId];
    if (!gridId) return;
    
    const grid = document.getElementById(gridId);
    if (grid.children.length > 0) return; // Already loaded
    
    // Show loading message
    grid.innerHTML = '<div class="loading">Loading content...</div>';
    
    // Simulate loading time
    setTimeout(() => {
        generateContent(sectionId, gridId);
    }, 500);
}

function generateContent(sectionId, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = '';
    
    for (let i = 1; i <= 16; i++) {
        const card = document.createElement('div');
        card.className = 'target-card';
        
        const targetText = targetTexts[i - 1] || `Target text ${i}`;
        
        let content = '';
        
        if (sectionId === 'ecapa' || sectionId === 'resnet') {
            const modelType = sectionId.toUpperCase();
            content = `
                <div class="target-title">Target ${i} - ${modelType}</div>
                <div class="target-text">"${targetText}"</div>
                <div class="graph-container">
                    <img src="data/${sectionId}_graphs/target_${i}_${sectionId}.png" 
                         alt="${modelType} normalized graph for target ${i}"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjYiPlBsYWNlaG9sZGVyOiAke21vZGVsVHlwZX0gR3JhcGggJHtpfTwvdGV4dD48L3N2Zz4='">
                </div>
            `;
        } else if (sectionId === 'comparison') {
            content = `
                <div class="target-title">Target ${i} - SNR vs Similarity</div>
                <div class="target-text">"${targetText}"</div>
                <div class="graph-container">
                    <img src="data/scatter_plots/target_${i}_scatter.png" 
                         alt="SNR vs Similarity scatter plot for target ${i}"
                         onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiM2NjYiPlBsYWNlaG9sZGVyOiBTY2F0dGVyIFBsb3QgJHtpfTwvdGV4dD48L3N2Zz4='">
                </div>
            `;
        } else if (sectionId === 'audio') {
            const originalTranscription = originalTranscriptions[i - 1] || "Original transcription not available";
            const adversarialTranscription = adversarialTranscriptions[i - 1] || "Adversarial transcription not available";
            
            content = `
                <div class="target-title">Target ${i} - Audio Comparison</div>
                <div class="target-text">"${targetText}"</div>
                <div class="audio-container">
                    <div class="audio-item">
                        <div class="audio-label">Original</div>
                        <audio controls>
                            <source src="data/audio/original/target_${i}_original.wav" type="audio/wav">
                            <div class="error-message">Audio not available</div>
                        </audio>
                    </div>
                    <div class="audio-item">
                        <div class="audio-label">Adversarial</div>
                        <audio controls>
                            <source src="data/audio/adversarial/target_${i}_adversarial.wav" type="audio/wav">
                            <div class="error-message">Audio not available</div>
                        </audio>
                    </div>
                </div>
                <div class="transcription-section">
                    <div class="transcription-title">Speech Recognition Results</div>
                    <div class="transcription-container">
                        <div class="transcription-item original-transcription">
                            <div class="transcription-label">Original Transcription</div>
                            <div class="transcription-text">"${originalTranscription}"</div>
                        </div>
                        <div class="transcription-item adversarial-transcription">
                            <div class="transcription-label">Adversarial Transcription</div>
                            <div class="transcription-text">"${adversarialTranscription}"</div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        card.innerHTML = content;
        grid.appendChild(card);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadSectionContent('overview');
});
