# Factory-Simulator
# Factory Simulator 🏭

An educational factory simulation tool designed to explore how production capacity, workforce, demand, pricing, and operating costs affect profitability.

## About the Project

Factory Simulator is a web-based decision-support tool that simulates a simplified factory environment.

The project combines concepts from:

- Industrial Engineering
- Economics
- Data Analysis
- Programming

Users can configure different factory parameters and observe how operational and economic decisions affect production and profitability.

## Features

### Factory Simulation

Users can configure:

- Number of machines
- Number of workers
- Working hours per day
- Machine production rate
- Worker cost
- Selling price
- Maximum daily demand
- Material cost
- Machine cost

The simulator calculates:

- Production
- Units sold
- Worker costs
- Material costs
- Revenue
- Profit
- Break-even point

### Workforce Optimization

The simulator evaluates different workforce sizes and compares their estimated daily profits.

The most profitable workforce configuration is highlighted in the results.

## Methodology

The simulator uses simplified mathematical models to represent factory operations.

**Production**

`Production = Machines × Production Rate × Working Hours × Worker Efficiency`

**Units Sold**

`Units Sold = min(Production, Demand)`

**Revenue**

`Revenue = Units Sold × Selling Price`

**Total Costs**

`Total Costs = Worker Cost + Material Cost + Machine Cost`

**Profit**

`Profit = Revenue − Total Costs`

**Break-even Point**

`Break-even Units = (Worker Cost + Machine Cost) ÷ (Selling Price − Material Cost)`

The model uses simplified assumptions for educational purposes and is not intended to represent a complete financial or operational model of a real factory.

## Technologies

- HTML
- CSS
- JavaScript

## Project Purpose

This project was created to explore the intersection of Industrial Engineering, Economics, and programming through a practical simulation.

## Live Demo

[Open the Factory Simulator](https://carolinafernandess1902.github.io/Factory-Simulator/)
