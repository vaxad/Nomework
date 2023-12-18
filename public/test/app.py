import os
import subprocess
import fontforge

def convert_image_to_svg(image_path, output_svg_path):
    subprocess.run(['potrace', '-s', image_path, '-o', output_svg_path])

def create_font(svg_folder, output_font_path):
    font = fontforge.font()

    # Iterate through each SVG file in the folder
    for filename in sorted(os.listdir(svg_folder)):
        if filename.lower().endswith('.svg'):
            unicode_code_point = ord(os.path.splitext(filename)[0].lower())
            glyph = font.createChar(unicode_code_point)
            glyph.importOutlines(os.path.join(svg_folder, filename))

    # Save the TTF font file
    font.generate(output_font_path)

if __name__ == "__main__":
    image_path = "/imgs/a.png"
    svg_folder = "/svg_folder"
    output_font_path = "/output_font.ttf"

    # Convert image to SVG
    convert_image_to_svg(image_path, os.path.join(svg_folder, "output_glyph.svg"))

    # Create font from SVG
    create_font(svg_folder, output_font_path)
