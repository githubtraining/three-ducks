## Exercise one

- From Glitch, open the sketch.js file in your browser. Should look like this after opening:
![image](https://user-images.githubusercontent.com/13326548/61630424-af044100-ac55-11e9-9397-54fe665e8058.png)
- Since we're just getting our feet wet, we'll make a change to the repository and turn that circle into a rectangle.
  - On line 6 of `sketch.js`, change `ellipse`(leavethenumbersalone) to `rect`(leavethenumbersalone)
  - Save, then refresh the page in your browser. Should look like this:
  ![image](https://user-images.githubusercontent.com/13326548/61630447-bcb9c680-ac55-11e9-9eac-2a936b92c704.png)
- Practice makes perfect! Let's make another commit. This time, we'll fill the rectangle in with color.
  - In `sketch.js`, move line 6 to line 7, and on line 6, type the following command.  
    - `fill(color(`blue`));`
    - If you want to substitute `blue` for your favorite color, feel free.
  - Your code should look like this:
  ![image](https://user-images.githubusercontent.com/13326548/61630463-c93e1f00-ac55-11e9-9763-e381bfe452f1.png)
  - Your file should look like this in your browser.
  ![image](https://user-images.githubusercontent.com/13326548/61630481-d2c78700-ac55-11e9-871f-68eb3c1bdcd7.png)
- Extra Credit
  - We're just getting started with what p5.js can do!
  - Want to see all the different [shapes](https://p5js.org/reference/#group-Shape) you can make? Go ahead and experiment.

## Exercise two

1. Fork the three-ducks repository:
<img width="1717" alt="step1" src="https://cloud.githubusercontent.com/assets/13326548/25216351/030b0ce4-2557-11e7-8413-04cd2eb60801.png">

2. Clone **your forked repository** (located at www.github.com/YOUR_USERNAME/three-ducks) to your Command Line Interface ([Instructions](https://youtu.be/GBRIxmKRPGA?t=16s)):
<img width="1720" alt="step2" src="https://cloud.githubusercontent.com/assets/13326548/25216381/2836bfb8-2557-11e7-80f5-1a24e5338b16.png">

3. From your Command Line, make sure to `cd` into the repository that you've just cloned. In this case, `cd three-ducks`

## Exercise three

1. Start by typing `git branch NEWBRANCHNAME`
2. Checkout to your new branch by typing `git checkout NEWBRANCHNAME`
3. Open up this project in your favorite text editor.
4. Create a new file in the `codeland-examples` branch and save.
5. Commit your change by using the core Git commands you've been taught!
    - `git status`,`git add FILE`, `git commit -m "DESCRIPTION"`, `git push`

## Exercise four

1. Add new content to your new file. Feel free to experiment in Glitch, and copy/paste when you're done.
2. Commit your change by using the core Git commands you've been taught! This time, make a slight change to `git add`, and use `git add -p` for atomic commits
    - `git status`,`git add -p FILE`, `git commit -m "DESCRIPTION"`, `git push`

## Exercise five

1. Make a Pull Request between your repo and the original repository.

## Exercise six

Extend! Improve the functionality of the project by adding responsiveness to the file in the browser, or a gallery view of all files, or anything else that you can think of!
