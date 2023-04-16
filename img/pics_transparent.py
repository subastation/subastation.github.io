import os
from PIL import Image

# Get the current working directory
cwd = os.getcwd()

# Iterate over all PNG files in the current directory
for file_name in os.listdir(cwd):
    if file_name.endswith(".png"):
        # Load the input image
        input_image = Image.open(os.path.join(cwd, file_name))

        # Convert the input image to RGBA mode
        input_image = input_image.convert("RGBA")

        # Get the image dimensions
        width, height = input_image.size

        # Create a new transparent image of the same size
        output_image = Image.new("RGBA", input_image.size, (0, 0, 0, 0))

        # Iterate over each pixel in the input image
        for x in range(width):
            for y in range(height):
                # Get the pixel value
                pixel = input_image.getpixel((x, y))

                # Check if the pixel is white (RGB values > 240)
                if pixel[0] > 120 and pixel[1] > 120 and pixel[2] > 120:
                    # If the pixel is white, set the output pixel to transparent
                    output_image.putpixel((x, y), (0, 0, 0, 0))
                else:
                    # Otherwise, set the output pixel to the same color as the input pixel
                    output_image.putpixel((x, y), pixel)

        # Save the output image
        output_file_name = os.path.join(cwd, "transparent_" + file_name)
        output_image.save(output_file_name)
