const fs = require('fs');
const csvParser = require('csv-parser');
require('dotenv').config();


const inputfile = process.env.CSV_FILE;

const outputfile = 'results.txt';


let totalSalary = 0;
let totalCount = 0;
let minSalary = Infinity;
let maxSalary = -Infinity;
let minSalaryProfession = '';
let maxSalaryProfession = '';
let minAge = Infinity;
let maxAge = -Infinity;


fs.createReadStream(inputfile)
  .pipe(csvParser())
  .on('data', (row) => {
    const salary = parseInt(row.salary);
    const age = parseInt(row.age);
    const profession = row.profession;


    // Calculate total salary
    totalSalary += salary;
    totalCount++;

    // Calculate minimum salary with corresponding profession
    if (salary < minSalary) {
      minSalary = salary;
      minSalaryProfession = profession;
    }
    
    // Calculate maximum salary with corresponding profession
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryProfession = profession;
    }
    // Calculate minimum age
    if (age < minAge) {
      minAge = age;
    }
    // Calculate maximum age
    if (age > maxAge) {
      maxAge = age;
    }
  })
  .on('end', () => {
    // Calculate average salary
    const averageSalary = totalSalary / totalCount;
    const results = `Total Salary: ${totalSalary}\nAverage Salary: ${averageSalary}\nMinimum Salary with the corresponding profession: ${minSalary} (${minSalaryProfession})\nMaximum Salary with the corresponding profession: ${maxSalary} (${maxSalaryProfession})\nMinimum Age: ${minAge}\nMaximum Age: ${maxAge}`;
    // Write results to file
    fs.writeFile(outputfile, results, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log(`Results written to ${outputfile}`);
      }
    });
  });