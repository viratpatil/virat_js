/**
 * Bubble Sort
 */

function bubblesort(elements) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < elements.length -1; i++) {

            if (elements[i + 1] < elements[i]) {
                let temp = elements[i + 1];
                elements[i + 1] = elements[i];
                elements[i] = temp;
                swap = true;
            }
        }
    } while(swap) 

    return elements;
}
 console.log(bubblesort(["Virat", "Ankit", "Rafiq", "Preet",
 "Ronak", "Aniket", "Hemant", "Saumik", "Anthony"]));
