# Automated Foilboard
*Stabilize a foilboard thanks to unstable equilibrium dynamics.*

February 2020

The simple demo of a prototype is presente here : [Click here to see the demo of the prototype.](/project_1.mp4)

![Embedded electronics](/project_1.jpg)

## Project

The goal of this project was to design a way to surf foilboard without using a command thanks to unstable equilibrium dynamics.

### Foilboard
First of all, lets introduce foilboards, there is surfboard tune with a foil.
A foil in the maritime vocabulary is a wing placed under the water in order to generate a lift force.

### Electric foilboard
Nowadays, foils are combined with motors in order to surf without wind and waves. This enables rides over the lakes for examples. 
To control the lift generated by the foil and the speed of the board, the rider uses a remote command.

### Unstable equilibrium dynamics
The idea behind this project is to get rid of the command.
The electric foilboard can be modelled by physics as an unstable equilibrium. These equilibria which have a natural tendency to vanish can be stabilized thanks to dynamics. In fact, when the foilboard begins to fall the user accelerates with command and when the foil starts to rise a little bit too much, the user decelerates. 

To get rid of the command, the idea is to build a sensor that decelerates when the board is rising up and to accelerate when the board is rising down. The idea is to export the mechanism of the gyropod on the foilboard. 

## Prototype

To test the idea, I tried to develop a prototype. This prototype was made of 3 parts : a swimming board to represent the surfboard; a motor and its electronic; the foil made of PVC.

### Electronics
The electrnic goal was to control the speed of the motor with respect to the tilt of the board. To succeed, I used an Arduino nano connected to a gyroscope module. The Arduino controls with the PWM command an electronical chopper. This montage helps control the voltage level at the pins of the motor in order to control the speed.

