import turtle
import colorsys

# Setup the screen
screen = turtle.Screen()
screen.setup(width=800, height=800)
screen.bgcolor("black")

# Create a turtle
wheel = turtle.Turtle()
wheel.speed(0)
wheel.width(2)
wheel.hideturtle()

# Number of segments in the wheel
segments = 360  # 1 degree per segment for smoothness
radius = 300

for i in range(segments):
    # Calculate colour based on position around the wheel
    hue = i / segments  # Normalised hue [0, 1]
    r, g, b = colorsys.hsv_to_rgb(hue, 1.0, 1.0)
    wheel.pencolor(r, g, b)

    # Draw one segment
    wheel.penup()
    wheel.setheading(i)
    wheel.forward(radius)
    wheel.pendown()
    wheel.forward(30)  # Small line outward to create the wheel edge
    wheel.penup()
    wheel.backward(radius + 30)

# Keep the window open until closed by the user
turtle.done()