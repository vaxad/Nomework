13
![image](https://res.cloudinary.com/db670bhmc/image/upload/v1703398829/Screenshot_2023-12-24_115014_idkbye.png)

---
# Nomework

## Overview

This web application leverages Gemini AI to generate text based on user prompts and presents the output in a manuscript-styled manner. Users can customize various parameters such as font style, shadow, spacing, and margins. Additionally, the application provides the unique feature of handwriting imitation, allowing users to scan their own handwriting and incorporate it into the generated canvas.

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari recommended)
- Node
- Internet connection

### Usage

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/vaxad/Nomework.git
   ```

2. Change into the project directory:

   ```bash
   cd Nomework
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```
4. Setup the Backend:

   ```bash
   npm install
   npm run dev
   ```
5. Use the website:

- Enter the assignment prompt in the designated field.
- Specify the characteristics of the person writing the assignment (kid, teenager, adult), the desired length of the assignment, and the number of grammatical mistakes (some/few/many/none).
- Click on the "Generate" button.

### Features

- Text Generation: Utilizes Gemini AI to generate text based on user prompts.
- Customization: Allows users to customize fonts, shadows, spacing, and margins for the generated text.
- Handwriting Imitation: Enables users to scan their handwriting for incorporation into the generated canvas.(Coming Soon)
- Download Options: Users can download individual images or generate a single PDF containing the entire canvas.

## Implementation

The project is implemented using NextJs and ExpressJs. Gemini AI is integrated to facilitate text generation, and various parameters are adjusted dynamically based on user input. The canvas is created using HTML5 canvas elements, and user-customizable options are implemented through JavaScript.

## How Nomework Works

1. **Prompt Processing:** The user provides details such as the kind of person writing the assignment, length, and grammatical mistakes.
2. **Text Generation:** Gemini AI generates the text based on the user's prompt.
3. **Handwriting Scanning:** Users can upload an image of their handwriting.
4. **Text-to-Image Conversion:** The scanned handwriting is converted into a TrueType Font (TTF) file, which is used to define the style.
5. **Canvas Rendering:** The generated text and user-customized parameters are applied to the canvas using the specified style.

## Acknowledgments

Special thanks to Gemini AI for providing the text generation capabilities used in this project.

## Contributors

1. [Tirath Bhathawala (ML)](https://github.com/Tirath5504)
2. [Varad Prabhu (Web)](https://github.com/vaxad)
3. [Siddhant Uniyal (ML)](https://github.com/siddhant-uniyal)
4. [Shubham Jaiswar (ML)](https://github.com/shubhamjaiswar43)
