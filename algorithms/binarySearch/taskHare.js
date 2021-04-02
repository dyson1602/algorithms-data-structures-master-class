// You are given a list of integers tasks and another list of integers people. The 
// integer tasks[i] represents the amount of strength required to perform the ith 
// task. people[i] represents the amount of strength the ith person has.

// Return the number of tasks that can be finished if one person can perform at 
// most one task.

const taskHare = (tasks, people) => {
  const sortedTasks = tasks.sort((a, b) => a - b)
  const sortedPeople = people.sort((a, b) => a - b)
  let count = 0, tPoint = 0, pPoint = 0

  while (pPoint < sortedPeople.length) {
    if (sortedTasks[tPoint] <= sortedPeople[pPoint]) {
      count++
      tPoint++
      pPoint++
    } else pPoint++
  }
  return count
}