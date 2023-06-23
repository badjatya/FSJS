function countStudents(students, sandwiches) {
    const queue = students.slice(); // Create a queue using the students array
    const preferences = new Map(); // Map to count student preferences

    for (const student of students) {
        preferences.set(student, (preferences.get(student) || 0) + 1);
    }

    let count = 0; // Count of students unable to eat
    let prevSize = queue.length; // Previous size of the queue

    for (const sandwich of sandwiches) {
        if (queue[0] === sandwich) {
            // If the front student prefers the top sandwich, they take it
            preferences.set(sandwich, preferences.get(sandwich) - 1);
            queue.shift();
            count = 0; // Reset the count since a student took a sandwich
        } else {
            // If the front student doesn't prefer the top sandwich,
            // move them to the end of the line
            preferences.set(queue[0], preferences.get(queue[0]) - 1);
            queue.push(queue.shift());
            count++;

            // If no changes occurred in a pass, it means no student can eat
            if (queue.length === prevSize) {
                break;
            }
        }

        prevSize = queue.length;
    }

    return count + preferences.get(queue[0] || 0);
}

// Example usage:
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // Output: 0
