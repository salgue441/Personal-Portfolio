import { v4 as uuidv4 } from "uuid"

// Images
import CitySkylinesImg from "../Images/CitySkylines.jpg"
import MathImg from "../Images/Math.jpg"
import SudokuImg from "../Images/Sudoku.jpg"
import TerminalImg from "../Images/Terminal.jpg"
import CodeImg from "../Images/Code.jpg"
import TicTacToe from "../Images/tic-tac-toe.jpg"
import Password from "../Images/password.jpg"
import BaseToBase from "../Images/base.jpg"
import NeuralNetwork from "../Images/neural-network.jpg"
import Covid from "../Images/covid.jpg"
import FakeNews from "../Images/fake news.jpg"
import Kart from "../Images/kart.jpg"
import SpaceInvaders from "../Images/space-invaders.jpg"

export const FullProjectsData = [
  {
    id: uuidv4(),
    name: "Mods for City Skylines",
    desc: "Managed the team in charge of documenting the process and creating a wiki-like document with the necessary steps to mod the game. Developed infinite money and resourcse, unlock all tiles when a game is loaded or started, and unlock all available assets when a game is loaded or started. The mods were developed in C# using the Unity Engine and City Skylines API and Colossal Framework. ",
    img: CitySkylinesImg,
    link: "https://github.com/salgue441/City-Skylines-Mod",
  },
  {
    id: uuidv4(),
    name: "Space Invaders Recreation",
    desc: "Recreated the original space invaders arcade game using C++20 and OpenGL. The game was developed using the Model-View-Controller design pattern and was able to run on any computer with a graphics card that supports OpenGL 3.3 or higher.",
    img: SpaceInvaders,
    link: "https://github.com/salgue441/ArcadeSpaceInvaders",
  },
  {
    id: uuidv4(),
    name: "Electrum Dashboarđ",
    desc: "Developed a modular full stack dashboard with React JS and Node JS capable of displaying the kart's position, current velocity, and engine's temperature. As well as building a specialized circuit with NodeMCU that connects tto a database and records the longitude and latitude, velocity, and engine's temperature.",
    img: Kart,
    link: "https://github.com/salgue441/IOT-WebPage",
  },
  {
    id: uuidv4(),
    name: "Sudoku Game and Solver",
    desc: "Developed a Sudoku puzzle generator using C++20 that runs in the terminal and generates a new puzzle every time the program is started. Gives the option to the player to manually solve the puzzle or using the auto solver feature built in. The auto solver feature uses the Backtracking Algorithm to solve the puzzle.",
    img: SudokuImg,
    link: "https://github.com/salgue441/Sudoku",
  },
  {
    id: uuidv4(),
    name: "Handwritten Digit Recognition",
    desc: "Developed a program (Windows only) with python, tkinter, keras, and numpylibraries and tensorflow backend capable of accepting handwritten input from the user in the designated canvas area and recognizing the digits with the MNIST data set. Displays the accuracy percentage of the recognized digit when compared to the MNIST data set at the top of the window.",
    img: MathImg,
    link: "https://github.com/salgue441/Handwritten-Digits-Recognition",
  },
  {
    id: uuidv4(),
    name: "Typescript Scripting Language",
    desc: "Developed a scripting language in Typescript that allows the user to create and run scripts. The language supports variables, functions, loops, and conditionals.",
    img: CodeImg,
    link: "https://github.com/salgue441/CA-Scripting-Language",
  },
  {
    id: uuidv4(),
    name: "Terminal Tree Representation",
    desc: "Developed a program in Python that takes a directory and shows the tree representation of files and subdirectories in the terminal.",
    img: TerminalImg,
    link: "https://github.com/salgue441/Terminal-Tree-list",
  },

  {
    id: uuidv4(),
    name: "Tic-Tac-Toe Game",
    desc: "Develoed a Tic Tac Toe application with GUI using Python and Pygame. The game allows the user to play against another player.",
    img: TicTacToe,
    link: "https://github.com/salgue441/Tic-Tac-Toe",
  },
  {
    id: uuidv4(),
    name: "Password Generator",
    desc: "Developed a password generator in C++ that allows the user to create a password with a specified length and character set.",
    img: Password,
    link: "https://github.com/salgue441/Password_Generator",
  },
  {
    id: uuidv4(),
    name: "Base to base conversion tool",
    desc: "Developed a base to base conversion tool in C++ that allows the user to convert a number from one base to another.",
    img: BaseToBase,
    link: "https://github.com/salgue441/Base-to-base-conversion-tool",
  },
  {
    id: uuidv4(),
    name: "Neural Network",
    desc: "Developed a neural network in Python that can predict the output for  3 different data sets. ",
    img: NeuralNetwork,
    link: "https://github.com/salgue441/Neural-Network",
  },
  {
    id: uuidv4(),
    name: "Fake News Detection",
    desc: "Developed a fake news detection system in Python using the Keras library. The system was trained using the Fake News dataset and was able to achieve an accuracy of 99.5%.",
    img: FakeNews,
    link: "https://github.com/salgue441/Fake-News-Detection",
  },
  {
    id: uuidv4(),
    name: "Covid Strand Analyzer",
    desc: "Developed a Covid strand analyzer in Python & R that analyzes strands from 4 different Countries: India, China, United States, and Germany. The program outputs the percetange of each base, it's complimentary strand and a phylogenetic tree.",
    img: Covid,
    link: "https://github.com/salgue441/Covid-Strand-Analyzer",
  },
]
