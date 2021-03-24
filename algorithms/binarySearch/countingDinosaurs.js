// You are given a string animals and another string dinosaurs. Every letter in 
// animals represents a different type of animal and every unique character in 
// dinosaurs represents a different dinosaur.
//Return the total number of dinosaurs in animals.

const countingDinosaurs = (animals, dinosaurs) => {
  let set = {}, count = 0
  for (let i = 0; i < animals.length; i++) {
    if (set[animals[i]]) set[animals[i]]++
    else set[animals[i]] = 1
  }
  for (let j = 0; j < dinosaurs.length; j++) {
    if (set[dinosaurs[j]]) {
      count += set[dinosaurs[j]]
      delete set[dinosaurs[j]]
    }
  }
  return count
}