# Autonomous Vehicle Control: A Study in Genetic Algorithms and Neural Networks

This project is a hands-on exploration of using genetic algorithms and neural networks to train an autonomous vehicle model. The primary objective is to create a self-driving car that can navigate through traffic while avoiding collisions and staying on the road.

## Project Overview

The project is based on a YouTube guide by Dr. Radu Mariescu-Istodor, which provides a step-by-step approach to implementing a genetic algorithm and a neural network for training an autonomous vehicle model. The model uses sensor data from virtual rays attached to the car, which detect obstacles (other cars) and the boundaries of the road.

The training process involves the following key components:

1. **Genetic Algorithm**: This algorithm is used to evolve the best set of weights and biases for the neural network by simulating natural selection. The algorithm starts with a population of randomly initialized neural networks (cars) and iteratively breeds new generations by selecting the fittest individuals (those with the highest fitness scores) and introducing variations through mutation and crossover.

2. **Neural Network**: The neural network serves as the brain of the autonomous vehicle, taking sensor data as input and producing steering angles as output. The network is trained using the genetic algorithm, which optimizes the weights and biases to minimize the fitness function (e.g., distance traveled without collisions).

3. **Linear Interpolation**: This utility is employed to smoothen the car's movements by interpolating between the current and target positions, resulting in more realistic and smoother motion.

4. **Sensor Data**: The sensor data is obtained from virtual rays attached to the car, which detect obstacles and road boundaries. This data is crucial for training the neural network and evaluating the fitness of each individual in the genetic algorithm.

5. **Mutation**: The mutation rate is a parameter that controls the rate at which new genetic variations are introduced into the population during the breeding process. A higher mutation rate increases the exploration of new solutions but may also disrupt promising solutions. In this project, the mutation rate is adjustable, allowing for experimentation and fine-tuning to find the optimal balance between exploration and exploitation.

## Project Structure

The project is implemented using vanilla JavaScript without any external libraries. The main components are as follows:

- `index.html`: The HTML file that contains the canvas element for rendering the simulation.
- `network.js`: The JavaScript file that handles the simulation, genetic algorithm, neural network(weights and biases).
- `main.js`: The javascript file that handles the rendering.
- `utils.js`: A utility file containing helper functions for various operations.

## Demo

You can view a live demo of the project on GitHub Pages: [Autonomous Vehicle Control Demo](https://amrit-sharma-7.github.io/SelfDrivingCarWithGeneticAlgorithm/)

Additionally, a GIF showcasing the simulation will be added here:

![Autonomous Vehicle Control Demo](https://github.com/Amrit-Sharma-7/SelfDrivingCarWithGeneticAlgorithm/blob/main/Demo.gif)

## Credits

This project is heavily inspired by the YouTube tutorial series by Dr. Radu Mariescu-Istodor. The original video guide can be found here: [YouTube Tutorial Link](https://youtu.be/NkI9ia2cLhc?si=x0R8GdXhy_GG1Gp1)
