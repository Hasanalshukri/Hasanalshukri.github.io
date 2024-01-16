//1.1 Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.

const doubleOddNumbers = numbers => numbers
  .filter(number => number % 2 !== 0)
  .map(oddNumber => oddNumber * 2);

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // Output: [2, 6]

//1.2 

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

//1.2 A. Map the tasks to durations in hours for Monday
const mondayDurations = monday.map(task => task.duration / 60);

// Map the tasks to durations in hours for Tuesday
const tuesdayDurations = tuesday.map(task => task.duration / 60);

console.log('Monday Durations (in hours):', mondayDurations);
console.log('Tuesday Durations (in hours):', tuesdayDurations);

//1.2, B. 
// Filter tasks with a duration of two hours or more for Monday
const mondayFiltered = monday.filter(task => task.duration >= 120);

// Filter tasks with a duration of two hours or more for Tuesday
const tuesdayFiltered = tuesday.filter(task => task.duration >= 120);

console.log('Monday Tasks with Duration >= 2 hours:', mondayFiltered);
console.log('Tuesday Tasks with Duration >= 2 hours:', tuesdayFiltered);

//1.2. C
const perHourRate = 20; // €20/hour

// Calculate the cost for each task for Monday
const mondayCosts = monday.map(task => task.duration / 60 * perHourRate);

// Calculate the cost for each task for Tuesday
const tuesdayCosts = tuesday.map(task => task.duration / 60 * perHourRate);

// Sum up the total cost for Monday
const totalMondayCost = mondayCosts.reduce((total, cost) => total + cost, 0);

// Sum up the total cost for Tuesday
const totalTuesdayCost = tuesdayCosts.reduce((total, cost) => total + cost, 0);

console.log('Total Cost for Monday: €', totalMondayCost);
console.log('Total Cost for Tuesday: €', totalTuesdayCost);

// 1.2. D

// Function to calculate the total cost for a day
const calculateTotalCost = (tasks) => {
  return tasks.map(task => task.duration * (perHourRate / 60)).reduce((total, cost) => total + cost, 0);
};

// Calculate total cost for Monday
const mondayTotalCost = calculateTotalCost(monday);

// Calculate total cost for Tuesday
const tuesdayTotalCost = calculateTotalCost(tuesday);

// Format and output the total costs
const formattedMondayCost = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR'
}).format(mondayTotalCost);

const formattedTuesdayCost = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR'
}).format(tuesdayTotalCost);

console.log('Total Cost for Monday:', formattedMondayCost);
console.log('Total Cost for Tuesday:', formattedTuesdayCost);



                            

