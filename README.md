# icassp-2025-results

# Adversarial Audio Attack Results - ICASSP 2025

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://yourusername.github.io/your-repo-name)
[![Paper](https://img.shields.io/badge/Paper-ICASSP%202025-blue)]()

## Overview

This repository contains materials for our ICASSP 2025 paper on Impact of Phonetics on Preserving Identity in Adversarial Voice Attacks. We present comprehensive results across 16 different target texts.

🌐 **[View Results Website]([https://yourusername.github.io/your-repo-name](https://daniyalkabir.github.io/icassp-2025-results/))**

## Research Highlights

- **Comprehensive Evaluation**: Analysis across 16 diverse target texts
- **Multi-Architecture Comparison**: ECAPA-TDNN vs ResNet performance (identity drift)
- **Quality Assessment**: SNR vs Similarity trade-off analysis
- **Audio Samples**: Original and adversarial audio comparisons with transcriptions

## Repository Structure

```
├── index.html                    # Main website file
├── css/
│   └── style.css                 # Stylesheet
├── js/
│   └── script.js                 # JavaScript functionality
├── data/
│   ├── ecapa_graphs/            # ECAPA-TDNN normalized results (16 graphs)
│   │   ├── target_1_ecapa.png
│   │   ├── target_2_ecapa.png
│   │   └── ... (up to target_16_ecapa.png)
│   ├── resnet_graphs/           # ResNet normalized results (16 graphs)
│   │   ├── target_1_resnet.png
│   │   ├── target_2_resnet.png
│   │   └── ... (up to target_16_resnet.png)
│   ├── scatter_plots/           # SNR vs Similarity plots (16 graphs)
│   │   ├── target_1_scatter.png
│   │   ├── target_2_scatter.png
│   │   └── ... (up to target_16_scatter.png)
│   └── audio/
│       ├── original/            # Original audio samples (16 files)
│       │   ├── target_1_original.wav
│       │   ├── target_2_original.wav
│       │   └── ... (up to target_16_original.wav)
│       └── adversarial/         # Adversarial audio samples (16 files)
│           ├── target_1_adversarial.wav
│           ├── target_2_adversarial.wav
│           └── ... (up to target_16_adversarial.wav)
└── README.md                    # This file
```

## Usage

### Viewing Results
Visit the [interactive website]([https://daniyalkabir.github.io/icassp-2025-results/]) to explore all results with an intuitive interface.

### Local Development
```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
# Open index.html in your browser or serve with a local server
python -m http.server 8000  # Python 3
# or
python -m SimpleHTTPServer 8000  # Python 2
```

## Required Files

To use this website, you need to add the following files to your repository:

### 1. ECAPA Graphs (16 files)
- `data/ecapa_graphs/target_1_ecapa.png`
- `data/ecapa_graphs/target_2_ecapa.png`
- ... up to `target_16_ecapa.png`

### 2. ResNet Graphs (16 files)
- `data/resnet_graphs/target_1_resnet.png`
- `data/resnet_graphs/target_2_resnet.png`
- ... up to `target_16_resnet.png`

### 3. Scatter Plot Graphs (16 files)
- `data/scatter_plots/target_1_scatter.png`
- `data/scatter_plots/target_2_scatter.png`
- ... up to `target_16_scatter.png`

### 4. Original Audio Files (16 files)
- `data/audio/original/target_1_original.wav`
- `data/audio/original/target_2_original.wav`
- ... up to `target_16_original.wav`

### 5. Adversarial Audio Files (16 files)
- `data/audio/adversarial/target_1_adversarial.wav`
- `data/audio/adversarial/target_2_adversarial.wav`
- ... up to `target_16_adversarial.wav`

## Customization Required

Before deployment, you must update these sections in `js/script.js`:

### 1.
