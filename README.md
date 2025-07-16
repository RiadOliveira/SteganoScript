<h1 align="center">SteganoScript</h1>

<p align="center">
  A TypeScript-based steganography application that enables message hiding within digital images. Developed as part of Digital Image Processing coursework, this CLI tool implements advanced pixel manipulation techniques to embed and extract text messages while maintaining visual integrity.
</p>

![image](https://github.com/user-attachments/assets/d2a101fd-4378-4bc2-ae3a-502ea8736379)
![image](https://img.shields.io/github/license/RiadOliveira/SteganoScript)

<br/>

Contents
=================
<!--ts-->
* [🛠️ Technologies](#technologies)
* [🚀 Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation & Setup](#setup)
  * [CLI Usage](#usage)
    * [Encoding Mode](#mode-encoding)
    * [Decoding Mode](#mode-decoding)
    * [Important Notes](#notes)
* [📊 Methodology](#methodology)
  * [Encoding Process](#encoding)
  * [Decoding Process](#decoding)
* [📂 Project Structure](#structure)
* [⚙️ Features](#features)
* [🔧 Usage Examples](#examples)
  * [Basic Encoding](#example-encoding)
  * [Basic Decoding](#example-decoding)
  * [Utility Commands](#example-utility)
* [📷 Demonstration](#demonstration)
* [📝 License](#license)
* [👨‍💻 Authors](#authors)
<!--te-->
<br/>

<h2 id="technologies">🛠️ Technologies</h2>
Built with:

* [Node.js](https://nodejs.org/en/)
* [TypeScript](https://www.typescriptlang.org/)
* [Canvas](https://www.npmjs.com/package/canvas) <br/><br/>

<h2 id="getting-started">🚀 Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>

Before running the application, ensure the following tools are installed:
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/)

<h3 id="setup">Installation & Setup</h3>
  
```bash
# Clone the repository
$ git clone https://github.com/RiadOliveira/SteganoScript.git

# Navigate to project directory
$ cd SteganoScript

# Install dependencies
$ npm install
```

<h3 id="usage">CLI Usage</h3>
SteganoScript offers a powerful CLI with comprehensive options for image steganography operations:

<h4 id="mode-encoding">Encoding Mode</h4>
Embed secret messages into images with these options:

| Option | Alias | Required | Description |
|--------|-------|----------|-------------|
| `--mode encoding` | `-m e` | Yes | Set operation mode to message embedding |
| `--imagePath <path>` | `-i` | Yes | Path to carrier image (JPG/PNG) |
| `--pathMessage <path>` | `-p` | Conditional* | Path to .txt file containing secret message |
| `--directMessage "text"` | `-d` | Conditional* | Direct text input of secret message |
| `--outputFileName <name>` | `-o` | No | Custom output filename (default: "outputFile") |

*Either `pathMessage` or `directMessage` required for encoding.

<h4 id="mode-decoding">Decoding Mode</h4>
Extract hidden messages from images:

| Option | Alias | Required | Description |
|--------|-------|----------|-------------|
| `--mode decoding` | `-m d` | Yes | Set operation mode to message extraction |
| `--imagePath <path>` | `-i` | Yes | Path to encoded image file |
| `--outputFileName <name>` | `-o` | No | Custom output filename for extracted message |

<h4 id="notes">Important Notes</h4>

- Output files are saved in the /outputs directory by default.
- Supported image formats: JPG, PNG.
- Maximum message capacity depends on image dimensions.
- During encoding, original image dimensions are preserved.<br/><br/>

<h2 id="methodology">📊 Methodology</h2>

<h3 id="encoding">Encoding Process</h3>

1) **Pixel Hashing**: Each pixel is converted to a character code using the weighted formula:
```(1 × R + 5 × G + 20 × B) % 256```.
2) **RGB Adjustment**: If needed, RGB values are incrementally adjusted to match target characters.
3) **Positioning**: Starting pixel is calculated based on image dimensions using Euler's constant.
4) **Distribution**: Message is spread across image using a cyclic jump pattern (2,4,6,8 pixels).
5) **Validation**: Strict bounds checking ensures all RGB values remain within 0-255 range.

<h3 id="decoding">Decoding Process</h3>

1) **Initial Position**: Same Euler-based calculation locates first encoded pixel.
2) **Pattern Recognition**: Cyclic jump sequence reconstructs original message distribution.
3) **Character Extraction**: Weighted hashing converts RGB values back to ASCII characters.
4) **Message Reconstruction**: Header metadata ensures accurate message length recovery.<br/><br/>

<h2 id="structure">📂 Project Structure</h2>

```text
SteganoScript/
├── outputs/          # Generated encoded images and decoded messages
├── temp/             # Temporary files for processing
├── src/
│   ├── constants/    # RGB weights and operational constants
│   ├── decoding/     # Message extraction logic
│   ├── encoding/     # Message embedding logic
│   ├── error/        # Custom error handling
│   ├── types/        # TypeScript interfaces
│   ├── utils/        # Core operations and validations
│   └── main.ts       # CLI entry point
├── .eslintrc        # Code style configuration
├── package.json     # Project dependencies
└── tsconfig.json    # TypeScript configuration
```

<br/>

<h2 id="features">⚙️ Features</h2>

- **Imperceptible Alterations** - Minimal RGB adjustments ensure visual integrity of carrier images.
- **Weighted Hashing Algorithm** - Proprietary RGB weighting system (1:5:20 ratio) for character encoding.
- **Adaptive Pixel Selection** - Intelligent pixel distribution using Euler-based positioning and cyclic jumps.
- **CLI Interface** - Simple command-line operation for easy integration into workflows.
- **Dual Input Modes** - Accept messages via text files or direct CLI input.
- **Input Validation** - Comprehensive checks for file paths and required arguments.
- **Help System** - Built-in documentation with ```--help``` flag.
- **Error Handling** - Clear error messages for invalid operations.<br/><br/>

<h2 id="examples">🔧 Usage Examples</h2>

<h3 id="example-encoding">Basic Encoding</h3>

```bash
# From text file
$ npm run dev -- -m=encoding -i=./temp/lena.jpg -p=./temp/message.txt

# Direct message input
$ npm run dev -- -m encoding -i=./temp/lena.jpg -d="Super Secret Message" -o=secret_lena
```

<h3 id="example-decoding">Basic Decoding</h3>

```bash
$ npm run dev -- -m=decoding -i=./outputs/secret_lena.png -o=extracted_message
```

<h3 id="example-utility">Utility Commands</h3>

```bash
# Show help
$ npm run dev -- --help

# Check version
$ npm run dev -- --version
```

<br/>

<h2 id="demonstration">📷 Demonstration</h2>

**Encoding Command:**
```bash
$ npm run dev -- -m encoding -i=./temp/lena.jpg -d="Super Ultra Secret Message"
```

**Result:**
| Original | Encoded |
|----------|---------|
| ![original](https://github.com/user-attachments/assets/e178c4fa-b1f3-495f-b99c-3fa48751e86b) | ![encoded](https://github.com/user-attachments/assets/759fe87b-498d-4f8f-96ae-93f9c3c242fa) |

<h2 id="license">📝 License</h2>
This project is MIT Licensed. See <a href="https://github.com/RiadOliveira/SteganoScript/blob/main/LICENSE">LICENSE</a> file for more details.

<br/>

<h2 id="authors">👨‍💻 Authors</h2>

<kbd>
 <a href="https://github.com/RiadOliveira">
   <img src="https://avatars.githubusercontent.com/u/69125013?v=4" width="100" alt="Ríad Oliveira"/>
   <br/><br/>
   <p align="center"><b>Ríad Oliveira</b></p>
 </a>
</kbd>
<kbd>
 <a href="https://github.com/LucasPaulinoH">
   <img src="https://avatars.githubusercontent.com/u/87985909?v=4" width="100" alt="Lucas Paulino"/>
   <br/><br/>
   <p align="center"><b>Lucas Paulino</b></p>
 </a>
</kbd>
