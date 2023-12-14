// 1.1 Open the apps.js and start by declaring an array that contains 10 strings. These strings should be of book titles you have read (or made up) and be lowercase without spaces so that you can use these later as HTML id attributes. (Example: Harry Potter's - The Chamber of Secrets -> harry_potter_chamber_secrets). Add a console.log statement to output this array to console. (This is for debugging and making sure everything is in order. Delete it later when you're done :))



const bookTitles = [
    "harry_potter_chamber_secrets",
    "lord_of_the_rings_fellowship_ring",
    "to_kill_a_mockingbird",
    "the_great_gatsby",
    "1984",
    "brave_new_world",
    "the_catcher_in_the_rye",
    "the_hobbit",
    "pride_and_prejudice",
    "the_da_vinci_code"
  ];
  
  
  // 1.3 Remove the temporary console.log from step 1.1. Make a function (or functions) that generate a ul with li elements for each book ID in the array using a for loop. Make sure that the function names you choose are an accurate reflection of what they do. As a reminder, here are the recommended Naming Conventions.
  
  // Step 1.1: Sample array of book IDs
  const bookIds = [1, 2, 3, 4, 5];
  
  // Step 1.2: Function to generate ul with li elements for each book ID
  function generateBookListElements(bookIds) {
    const listElements = [];
  
    // Iterate through each book ID
    for (const bookId of bookIds) {
      // Create a list item element for each book ID
      const listItem = document.createElement('li');
  
      // Set the text content of the list item to the book ID
      listItem.textContent = `Book ID: ${bookId}`;
  
      // Add the list item to the array
      listElements.push(listItem);
    }
  
    return listElements;
  }
  
  // Step 1.3: Function to generate an unordered list and append list items
  function generateAndAppendBookList(bookIds) {
    const unorderedList = document.createElement('ul');
  
    // Call the function to generate list item elements
    const listElements = generateBookListElements(bookIds);
  
    // Append each list item to the unordered list
    listElements.forEach((listItem) => {
      unorderedList.appendChild(listItem);
    });
  
    // Append the unordered list to the body (or another desired location)
    document.body.appendChild(unorderedList);
  }
  
  // Step 1.4: Call the function to generate and append the book list
  generateAndAppendBookList(bookIds);
  
  // 1.4 Make an object (not an array!) containing information for each book. Each property of this object should be another (i.e., nested) object with the book ID you thought up in step 1.1 as a key, and at least the following properties: title, language and author.
  // 1.4: Make an object containing information for each book
  const bookInfo = {
    1: {
      title: "The Great Gatsby",
      language: "English",
      author: "F. Scott Fitzgerald"
    },
    2: {
      title: "To Kill a Mockingbird",
      language: "English",
      author: "Harper Lee"
    },
    3: {
      title: "Nineteen Eighty-Four",
      language: "English",
      author: "George Orwell"
    },
    4: {
      title: "The Catcher in the Rye",
      language: "English",
      author: "J.D. Salinger"
    },
    5: {
      title: "Brave New World",
      language: "English",
      author: "Aldous Huxley"
    },
    // Add information for the rest of the books
    6: {
      title: "Fahrenheit 451",
      language: "English",
      author: "Ray Bradbury"
    },
    7: {
      title: "The Hobbit",
      language: "English",
      author: "J.R.R. Tolkien"
    },
    8: {
      title: "The Lord of the Rings",
      language: "English",
      author: "J.R.R. Tolkien"
    },
    9: {
      title: "Pride and Prejudice",
      language: "English",
      author: "Jane Austen"
    },
    10: {
      title: "The Alchemist",
      language: "Portuguese",
      author: "Paulo Coelho"
    }
  };
  
  // Example usage:
  console.log(bookInfo[1]); // Output information for book with ID 1
  console.log(bookInfo[2]); // Output information for book with ID 2
  
  // 1.5 Now change the function from step 1.3 that you used to display the book ID's in a list to take the actual information about the book from the object and display that. Make sure you choose the correct HTML elements for each piece of info, for instance, a heading for the title.
  
  // 1.5: Function to generate an unordered list and display book information
  function generateAndAppendBookList(bookInfo) {
    // Create an unordered list element
    const unorderedList = document.createElement('ul');
  
    // Iterate through each book ID in the bookInfo object
    for (const bookId in bookInfo) {
      // Create a list item element for each book
      const listItem = document.createElement('li');
  
      // Create heading elements for title, language, and author
      const titleHeading = document.createElement('h2');
      const languageParagraph = document.createElement('p');
      const authorParagraph = document.createElement('p');
  
      // Set the content for the heading and paragraphs
      titleHeading.textContent = bookInfo[bookId].title;
      languageParagraph.textContent = `Language: ${bookInfo[bookId].language}`;
      authorParagraph.textContent = `Author: ${bookInfo[bookId].author}`;
  
      // Append the heading and paragraphs to the list item
      listItem.appendChild(titleHeading);
      listItem.appendChild(languageParagraph);
      listItem.appendChild(authorParagraph);
  
      // Append the list item to the unordered list
      unorderedList.appendChild(listItem);
    }
  
    // Append the unordered list to the body (or another desired location)
    document.body.appendChild(unorderedList);
  }
  
  // Call the function to generate and append the book list
  generateAndAppendBookList(bookInfo);
  
  // 1.6 Beautify your html page with css (use the style.css file for that), add sources and alts to each of the images.
  
  function generateAndAppendBookList(bookInfo) {
    const unorderedList = document.createElement('ul');
  
    for (const bookId in bookInfo) {
      const listItem = document.createElement('li');
  
      const titleHeading = document.createElement('h2');
      const languageParagraph = document.createElement('p');
      const authorParagraph = document.createElement('p');
  
      // Create an image element
      const bookImage = document.createElement('img');
      bookImage.src = bookInfo[bookId].imageUrl; // Add the URL for the image
      bookImage.alt = `Cover of ${bookInfo[bookId].title}`; // Add alt text
  
      titleHeading.textContent = bookInfo[bookId].title;
      languageParagraph.textContent = `Language: ${bookInfo[bookId].language}`;
      authorParagraph.textContent = `Author: ${bookInfo[bookId].author}`;
  
      // Append the image, heading, and paragraphs to the list item
      listItem.appendChild(bookImage);
      listItem.appendChild(titleHeading);
      listItem.appendChild(languageParagraph);
      listItem.appendChild(authorParagraph);
  
      unorderedList.appendChild(listItem);
    }
  
    document.body.appendChild(unorderedList);
  }
  
  // Call the function to generate and append the book list
  generateAndAppendBookList(bookInfo);
  
  //1.7 Find and download book covers for each book and construct a new object which has as keys the book IDs again, and as value the path to the image source (e.g. { harry_potter_blabla: './img/harry_potter_blabla.jpg', ... }).
  
  const bookCovers = {
    1: './img/great_gatsby_cover.jpg',
    2: './img/to_kill_a_mockingbird_cover.jpg',
    3: './img/nineteen_eighty_four_cover.jpg',
    4: './img/catcher_in_the_rye_cover.jpg',
    5: './img/brave_new_world_cover.jpg',
    6: './img/fahrenheit_451_cover.jpg',
    7: './img/hobbit_cover.jpg',
    8: './img/lord_of_the_rings_cover.jpg',
    9: './img/pride_and_prejudice_cover.jpg',
    10: './img/alchemist_cover.jpg',
  };
  
  // Merge bookInfo with bookCovers
  const mergedBookInfo = Object.entries(bookInfo).reduce((acc, [key, value]) => {
    acc[key] = { ...value, imageUrl: bookCovers[key] };
    return acc;
  }, {});
  
  // Updated bookInfo with image URLs
  console.log(mergedBookInfo);
   
  // 1.8 Loop over these entries (hint: Object.keys(objectName) gives you an array containing the keys). Then write a function which places an image at the corresponding li element. Remember that objects are not ordered, so you cannot guarantee that the first key is the first li element. (Hint: you could give each li item an id tag by modifying the function you made before.)
  
  // Loop over entries and place images in corresponding li elements
  Object.keys(mergedBookInfo).forEach(bookId => {
    const listItem = document.getElementById(`book-${bookId}`);
  
    if (listItem) {
      const bookImage = document.createElement('img');
      bookImage.src = mergedBookInfo[bookId].imageUrl;
      bookImage.alt = `Cover of ${mergedBookInfo[bookId].title}`;
  
      // Assuming the image should be placed before the title
      listItem.insertBefore(bookImage, listItem.firstChild);
    }
  });
  
  